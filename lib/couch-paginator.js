var sys = require('util'),
    CouchDB = require('couchdb');

function clone(o) {
    var _o = function(){};
    _o.prototype = o;
    var newO = new _o;
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            newO[i] = o[i];
        }
    }
    return newO;
}

function CouchdbViewPaginator(database, config) {
    if (!(database instanceof CouchDB.Db)) {
        throw new Error('Wrong database provided');
    }
    if (!config.docsView) {
        throw new Error('You must provide docsView param');
    }
    if (!config.keysView) {
        throw new Error('You must provide keysView param');
    }
    if (!config.design) {
        throw new Error('You must provide design to fetch view from');
    }
    config.docsViewParams = config.docsViewParams || {};
    config.keysViewParams = config.keysViewParams || {};
    
    this._db = database;
    this._itemsPerPage = config.itemsPerPage || 10;
    this._page = config.page || 1;
    this._config = config;
}

CouchdbViewPaginator.prototype.setItemsPerPage = function(ipp) {
    this._itemsPerPage = ipp;
    return this;
};
CouchdbViewPaginator.prototype.getItemsPerPage = function() {
    return this._itemsPerPage;
};
CouchdbViewPaginator.prototype.setPage = function(page) {
    this._page = page;
    return this;
};
CouchdbViewPaginator.prototype.getPage = function() {
    return this._page;
};
CouchdbViewPaginator.prototype.requestItems = function(cb) {
    var p = this.getPage() || 1, 
        ipp = this.getItemsPerPage() || 10, 
        skip = (p - 1) * ipp, 
        self = this,
        docsViewParams = clone(this._config.docsViewParams), 
        keysViewParams = clone(this._config.keysViewParams),
        design = this._config.design;
    //Requesting keys
    keysViewParams.skip = skip;
    keysViewParams.limit = 1;
    
    this._db.view(design, this._config.keysView, keysViewParams, function(er, ok) {
        if (er) {
            cb(er);
            return;
        }
        if (!ok.rows || ok.rows.length == 0 || !ok.rows[0].key) {
            //Return empty set because nothing were found
            cb(null, {
                total_rows : ok.total_rows,
                offset : 0,
                rows : []
            });
            return;
        }
        var startkey = ok.rows[0].key;
        docsViewParams.startkey = null;
        docsViewParams.startkey_docid = startkey;
        docsViewParams.limit = ipp;
        
        self._db.view(design, self._config.docsView, docsViewParams, cb);
    });
};

CouchDB.Db.prototype.paginateView = function(config) {
    var iterator = new CouchdbViewPaginator(this, config);
    return iterator;
};
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var sys = require('util'), 
    events = require('events'), 
    couchdb = require('couchdb');
    
require('../lib/couch-paginator');

Class.namespace('xForum.Model');

xForum.Model.Abstract = function(o) {
    this._data = {};
    var defaults = {};
    Class.Abstract.prototype.setOptions.call(this, defaults.extend(o || {}));
    xForum.Model.Abstract.superclass.constructor.call(this);
};

Class.extend(xForum.Model.Abstract, events.EventEmitter, function(proto) {
    var _mapper = couchdb.createClient(5984, 'localhost'),
        _db = _mapper.db('forum');
        
    function __mapData(data, fields) {
        var _mutator, newData = {};
        for (var f in data) {
            if (data.hasOwnProperty(f)) {
                if (fields.hasOwnProperty(f)) {
                    _mutator = fields[f];
                    switch (typeof(_mutator)) {
                        case 'function':
                            newData[f] = _mutator.call(self, data[f]);
                            break;
                        default:
                            newData[_mutator] = data[f];
                    }
                }
                else {
                    newData[f] = data[f];
                }
            }
        }
        return newData;
    }
    
    proto.extend({
        //From object to DB
        _mapFields : {
            
        },
        //From DB to object
        _unmapFields : {
            
        },
        _map : function(data) {
            return __mapData(data || this.getRawData(), this._mapFields);
        },
        _unmap : function(data) {
            return __mapData(data || this.getRawData(), this._unmapFields);
        },
        _getMapper : function() {
            return _mapper;
        },
        _getDb : function() {
            return _db;
        },
        getRawData : function(key) {
            var r = this._data;
            if (key && r.hasOwnProperty(key)) {
                r = r[key];
            }
            return r;
        },
        setRawData : function(key, data) {
            if (typeof data === 'undefined') {
                data = key;
                this._data = this._unmap(data);
            }
            else {
                var _d = {};_d[key] = data;
                data = this._unmap(_d);
                this._data[key] = data[key];
            }
            return this;
        },
        save : function(cb) {
            var data = this._map(), self = this;
            function __save(er, data) {
                if (er) {
                    self.emit('error', er);
                    return;
                }
                var args = [data, function(er, ok) {
                    if (er) {
                        self.emit('error', er);
                        return;
                    }
                    self.setRawData(ok);
                    cb(ok);
                    self.emit('save', data, ok);
                }];
                if (data._id || data.id) {
                    args.unshift(data._id || data.id);
                }
                self._getDb().saveDoc.apply(self._getDb(), args);
            }
            if (( data._id || data.id ) && !data._rev) {
                this._getDb().getDoc(data._id || data.id, function(er, _d) {
                    if (!er) {
                        //Document already exists - update it;
                        data = _d.extend(data)
                    }
                    __save(data.id, data);
                });
            }
            else {
                __save(null, data);
            }
        },
        remove : function(cb) {
            var data = this._map(), self = this;
            function __remove(er, ok) {
                if (er) {
                    self.emit('error', er);
                    return;
                }
                self._getDb().removeDoc(ok._id || ok.id || null, ok._rev);
                cb(ok);
                self.emit('remove', data, ok);
            }
            if (!data._rev) {
                self._getDb().getDoc(id, __remove);
            }
            else {
                __remove(null, {id:data._id || data.id, _rev:data._rev});
            }
        }
    });
    return proto;
});
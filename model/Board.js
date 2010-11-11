/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
require('../lib/couch-paginator');
var sys = require('util');

Class.namespace('xForum.Model');

xForum.Model.Board = function(o) {
    var defaults = {};
    xForum.Model.Board.superclass.prototype.constructor.call(this, defaults.extend(o || {}));
};

Class.extend(xForum.Model.Board, xForum.Model.Abstract, function(proto) {
    var _id = 0,
        _title = '',
        _forumsCount,
        _forums = [],
        _forumsHash = [];
    
    proto.extend({
        requestForums : function(page, count, cb) {
            if (typeof page === "function") {
                cb = page;
                page = count = null;
            }
            if (typeof count === "function") {
                cb = count;
                count = null;
            }
            var self = this, 
                paginator = this._getDb().paginateView({
                    design : 'forums', 
                    docsView : 'all',
                    keysView : 'all_keys'
                });
            paginator
                .setPage(page || 1)
                .setItemsPerPage(count || 10)
                .requestItems(function(er, ok) {
                    if (er) {
                        throw new Error('Error during getting forums list');
                    }
                    var forum, data;
                    self.clearForums();
                    for (var i=0;i<ok.rows.length;i++) {
                        data = ok.rows[i].value;
                        forum = new xForum.Model.Forum({
                            rawData : data
                        });
                        _forums.push(forum);
                        _forumsHash.push(forum.getId() || null);
                    }
                    self.setForumsCount(ok.total_rows);
                    cb(_forums);
                    self.emit('forums_list', this, _forums);
                });
        },
        getForums : function() {
            return _forums;
        },
        clearForums : function() {
            _forums = [];
            _forumsHash = [];
            return this;
        },
        setForumsCount : function(forumsCount) {
            _forumsCount = forumsCount;
            return this;
        },
        getForumsCount : function() {
            return _forumsCount;
        },
        addForum : function(forum, cb) {
            var self = this;
            if (!(forum instanceof xForum.Model.Forum)) {
                throw new Error('Wrong forum type');
            }
            forum.setBoard(this).save(function() {
                this.setForumsCount(this.getForumsCount() + 1).save(function(data) {
                    if (typeof cb == 'function') {
                        cb(data);
                    }
                    self.emit('forum_added', this, forum, this.getForumsCount());
                });
            });
            return this;
        }
    });
    return proto;
});
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Class.namespace('xForum.Model');

xForum.Model.Forum = function(o) {
    var defaults = {};
    xForum.Model.Forum.superclass.prototype.constructor.call(this, defaults.extend(o || {}));
};

Class.extend(xForum.Model.Forum, xForum.Model.Abstract, function(proto) {
    var _id = 0,
        _postsCount,
        _posts = [],
        _postsHash = [];
    
    proto.extend({
        setId : function(id) {
            return this.setRawData('_id', id);
        },
        getId : function() {
            return this.getRawData('_id');
        },
        setTitle : function(title) {
            return this.setRawData('title', title);
        },
        getTitle : function() {
            return this.getRawData('title');
        },
        setDescription : function(description) {
            return this.setRawData('description', description);
        },
        getDescription : function() {
            return this.getRawData('description');
        },
        setDate : function(date) {
            return this.setRawData('date', date);
        },
        getDate : function() {
            return this.getRawData('date');
        },
        setPostsCount : function(postsCount) {
            _postsCount = postsCount;
            return this;
        },
        getPostsCount : function() {
            return _postsCount;
        },
        addPost : function(post, cb) {
            if (!(post instanceof xForum.Model.Post)) {
                throw new Error('Wrong post type');
            }
            post.setForum(this).save(function() {
                this.setPostsCount(this.getPostsCount() + 1).save(function(data) {
                    if (typeof cb == 'function') {
                        cb(data);
                    }
                    self.emit('post_added', this, post, this.getPostsCount());
                });
            });
            return this;
        },
        save : function(cb) {
            this.setRawData('type', 'forum');
            xForum.Model.Forum.superclass.prototype.save.call(this, cb);
        }
    });
    return proto;
});
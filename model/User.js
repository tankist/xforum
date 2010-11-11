/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Class.namespace('xForum.Model');

xForum.Model.User = function(o) {
    var defaults = {};
    xForum.Model.User.superclass.prototype.constructor.call(this, defaults.extend(o || {}));
};

Class.extend(xForum.Model.User, xForum.Model.Abstract, function(proto) {
    var _id = 0,
        _name = '',
        _registered,
        _messages = [],
        _posts = [],
        _messagesHash = [],
        _postsHash = [];
    
    proto.extend({
        setId : function(id) {
            _id = id;
            return this;
        },
        getId : function() {
            return _id;
        },
        setName : function(name) {
            _name = name;
            return this;
        },
        getName : function() {
            return _name;
        },
        setRegistered : function(date) {
            if (!(date instanceof Date)) {
                throw new Error('date must be an instance of Date type');
            }
            _registered = date;
            return this;
        },
        getRegistered : function() {
            return _registered;
        },
        setMessages : function(messages) {
            if (!(messages instanceof Array)) {
                throw new Error('Messages must be an instance of Array type');
            }
            _messages = messages;
            return this;
        },
        getMessages : function() {
            return _messages;
        },
        /*addMessage : function(message) {
            if (!(message instanceof xForum.Model.Message)) {
                throw new Error('Messages must be an instance of Message type');
            }
            message.setAuthor(this).save(function(newMessage, oldUser, newUser) {
                self.emit('message_add', newMessage);
            });
            return this;
        },
        removeMessage : function(message, db) {
            if (!(message instanceof xForum.Model.Message)) {
                throw new Error('Messages must be an instance of Message type');
            }
            //TODO: removing message from database
            if (!!db) {
                
            }
            return this;
        },
        clearMessages : function() {
            _messages = [];
            return this;
        },*/
        setPosts : function(posts) {
            if (!(posts instanceof Array)) {
                throw new Error('Posts must be an instance of Array type');
            }
            _posts = posts;
            return this;
        },
        getPosts : function() {
            return _posts;
        }
        /*addPost : function(post) {
            var self = this;
            if (!(post instanceof xForum.Model.Post)) {
                throw new Error('Posts must be an instance of Post type');
            }
            post.save(function(newPost, oldUser, newUser) {
                self.emit('post_add', newPost);
            });
            return this;
        },
        removePost : function(post) {
            var self = this;
            if (!(post instanceof xForum.Model.Post)) {
                throw new Error('Posts must be an instance of Post type');
            }
            post.remove(function(oldPost) {
                self.emit('post_remove', oldPost);
            });
            return this;
        },
        clearPosts : function() {
            _posts = [];
            return this;
        }*/
    });
    return proto;
});
const User = require('./users');
const Post = require('./posts');
const Comment = require('./comments');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

Comment.hasMany(Comment, {
  foreignKey: "parent_comment_id",
  as: 'child_comment'
});

Comment.belongsTo(Comment, {
  foreignKey: "parent_comment_id",
  as: 'parent_comment'
});


module.exports = { User, Post, Comment };

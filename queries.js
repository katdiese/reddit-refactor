var knex = require('./db/knex');
function Posts() {
  return knex('posts');
}
function Users() {
  return knex('users');
}
function Comments() {
  return knex('comments');
}

module.exports = {
  getPosts: function() {
    return Posts().select().innerJoin('users', 'users.user_id', 'posts.user_id');
  },
  getPostCommentsAndUser: function(id) {
    return Posts().where('posts.post_id',id).innerJoin('comments', 'comments.post_id', 'posts.post_id').innerJoin('users', 'users.user_id', 'posts.user_id');
  },
  addPost: function(post) {
    return Posts().insert(post);
  },
  addComment: function(post_id, comment) {
    return Comments().insert({post_id: post_id, user_id: comment.user_id, comment: comment.comment});
  }
}
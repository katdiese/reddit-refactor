app.service('postService', ['crudService', function(crudService) {
  return {
    getAllPosts: function() {
      return crudService.getAll('api')
      .then(function(posts) {
        return posts;
      })
    },
    addPost: function(post) {
      console.log('something');
      return crudService.addOne('api/posts', post);
    },
    getComments: function(id) {
      return crudService.getAll('api/posts/' + id)
    },
    addComment: function(id,comment) {
      return crudService.addOne('api/posts/' + id + '/comment', comment)
    }

  }
}]);

app.service('crudService', ['$http', function($http) {
  return {
    getAll: function(resource) {
      return $http.get('/' + resource)
      .then(function(res) {
        return res;
      })
      .catch(function(err) {
        return err;
      })
    },
    addOne: function(resource, payload) {
      return $http.post('/' + resource, payload)
      .then(function(res) {
        return res;
      })
      .catch(function(err) {
        return err;
      })
    },
    delete: function(resource,id) {
      return $http.delete(resource + '/' + id);
    },
    edit: function(resource,id) {
      return $http.put(resource + '/' + id);
    }
  }
}]);
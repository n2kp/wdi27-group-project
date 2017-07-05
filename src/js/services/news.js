angular
.module('projectApp')
.service('newsService', newsService);

newsService.$inject = ['$http'];
function newsService($http){
  this.getNews = function getNews() {
    return $http
      .get('/api/news')
      .then((response) => {
        const sorted = response.data.map(newstory => {
          return {
            name: newstory.author,
            title: newstory.title,
            description: newstory.description,
            url: newstory.url
          };
        });
        return sorted
      });

  };
}

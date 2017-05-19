(function() {
  angular.module('classifieds')
    .service('AdsService', function($http) {
      return {
        getAd: function() {
          return $http.get('/classifieds')
          .then(function(payload) {
            console.log(payload.data)

            return payload.data
          })
        }
      }
    })
})()

(function() {
  angular.module('classifieds', [])
    .component('ads', {

      controller: 'AdsController',
      controllerAs: 'vm',
      templateUrl: "../templates/ads.html"
    })

    AdsController.$inject = ['AdsService', 'NewAdFormService']
    function AdsController(AdsService) {
      const vm = this
      vm.navigate = function(e) {
        e.preventDefault()
        $state.go('newAd')
      }
      vm.$onInit = function() {
        AdsService.getAd().then(function(data) {
          console.log(data)
          vm.ads = data
        })
      }
    }
})()

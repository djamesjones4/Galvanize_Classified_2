(function() {
  angular.module('classifieds', [])
    .component('newAdForm', {

      controller: 'NewAdController',
      controllerAs: 'vm',
      templateUrl: "../templates/ads.html"
    })

    NewAdController.$inject = ['NewAdFormService']
    function NewAddController(NewAdFormService) {
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

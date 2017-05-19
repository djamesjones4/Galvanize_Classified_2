(function() {
  angular.module('classifieds', [])
    .component('ads', {
      controller: AdsController,
      templateUrl: "../templates/ads.html"
    })
    // .component('newAdForm', {
    //   controller: newAdController,
    //   templateUrl: "../templates/newAdForm.html"
    // })
  AdsController.$inject = ['AdsService', 'NewAdFormService']
  function AdsController(AdsService) {
    const vm = this
    vm.$onInit = function() {
      AdsService.getAd().then(function(data) {
        console.log(data)
        vm.ads = data
      })
    }
  }
  function newAdController(NewAdFormService) {
    const vm = this
    NewAdFormService.newAd().then(function(data) {
      console.log(data)
      vm.newAd = data
    })
  }
})()

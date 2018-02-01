angular.module('devmtnTravel', ['ui.router']).config( function ( $stateProvider, $urlRouterProvider ) {
  $stateProvider
    .state('home',{
      url:'/',
      templateUrl: "app/about/aboutTmpl.html"
    });

    $stateProvider
    .state('packages',{
      url:'/packages/:country',
      templateUrl: "app/packages/packagesTmpl.html",
      controller: "packagesCtrl"
    });

    $stateProvider
    .state('locations',{
      url:'/locations',
      templateUrl: "app/locations/locationsTmpl.html",
      controller: "locationsCtrl"
    });

    $stateProvider
    .state('booked',{
      url:'/booked/:id',
      templateUrl: "app/booked/bookedTmpl.html",
      controller: "bookedCtrl"
    });

    $stateProvider
    .state('adventurers',{
      url:'/adventurers',
      templateUrl: "app/about/adventurers/adventurersTmpl.html"
    });

    $stateProvider
    .state('contact',{
      url:'/contact',
      templateUrl: "app/about/contact/contactTmpl.html"
    });

  $urlRouterProvider
    .otherwise('/');
});

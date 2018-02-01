angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrvc){
    mainSrvc.getPackageInfo().then(response => {
        if ( $stateParams.id ) {
            let index = response.data.findIndex( function( package ) {
              return package.id === parseInt( $stateParams.id );
            }); 
            if ( index !== -1 ) {
                $scope.package = response.data[ index ];
              }
          }
    })
})


define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_622',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 622');
    	$scope.test = TestService.getTest()
    }]);
});

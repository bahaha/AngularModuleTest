define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_885',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 885');
    	$scope.test = TestService.getTest()
    }]);
});

define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_439',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 439');
    	$scope.test = TestService.getTest()
    }]);
});

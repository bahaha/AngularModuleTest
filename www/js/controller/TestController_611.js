define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_611',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 611');
    	$scope.test = TestService.getTest()
    }]);
});

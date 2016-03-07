define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_559',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 559');
    	$scope.test = TestService.getTest()
    }]);
});

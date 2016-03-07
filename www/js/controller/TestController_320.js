define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_320',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 320');
    	$scope.test = TestService.getTest()
    }]);
});

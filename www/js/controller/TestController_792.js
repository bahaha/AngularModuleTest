define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_792',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 792');
    	$scope.test = TestService.getTest()
    }]);
});

define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_39',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 39');
    	$scope.test = TestService.getTest()
    }]);
});

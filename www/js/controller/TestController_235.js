define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_235',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 235');
    	$scope.test = TestService.getTest()
    }]);
});

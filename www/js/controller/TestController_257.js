define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_257',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 257');
    	$scope.test = TestService.getTest()
    }]);
});

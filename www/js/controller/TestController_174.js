define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_174',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 174');
    	$scope.test = TestService.getTest()
    }]);
});

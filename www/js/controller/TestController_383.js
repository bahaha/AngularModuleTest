define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_383',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 383');
    	$scope.test = TestService.getTest()
    }]);
});

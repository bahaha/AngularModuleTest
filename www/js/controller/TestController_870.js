define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_870',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 870');
    	$scope.test = TestService.getTest()
    }]);
});

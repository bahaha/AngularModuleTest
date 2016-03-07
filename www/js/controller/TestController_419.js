define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_419',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 419');
    	$scope.test = TestService.getTest()
    }]);
});

define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_925',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 925');
    	$scope.test = TestService.getTest()
    }]);
});

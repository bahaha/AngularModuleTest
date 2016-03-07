define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_844',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 844');
    	$scope.test = TestService.getTest()
    }]);
});

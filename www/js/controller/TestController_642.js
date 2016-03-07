define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_642',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 642');
    	$scope.test = TestService.getTest()
    }]);
});

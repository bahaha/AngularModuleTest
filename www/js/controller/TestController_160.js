define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_160',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 160');
    	$scope.test = TestService.getTest()
    }]);
});

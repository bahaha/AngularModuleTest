define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_252',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 252');
    	$scope.test = TestService.getTest()
    }]);
});

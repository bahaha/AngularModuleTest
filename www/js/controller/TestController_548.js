define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_548',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 548');
    	$scope.test = TestService.getTest()
    }]);
});

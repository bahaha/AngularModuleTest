define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_254',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 254');
    	$scope.test = TestService.getTest()
    }]);
});

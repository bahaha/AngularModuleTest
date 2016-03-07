define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_329',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 329');
    	$scope.test = TestService.getTest()
    }]);
});

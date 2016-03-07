define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_408',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 408');
    	$scope.test = TestService.getTest()
    }]);
});

define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_40',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 40');
    	$scope.test = TestService.getTest()
    }]);
});

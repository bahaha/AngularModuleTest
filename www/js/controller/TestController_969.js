define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_969',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 969');
    	$scope.test = TestService.getTest()
    }]);
});

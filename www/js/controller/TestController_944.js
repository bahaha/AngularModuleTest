define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_944',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 944');
    	$scope.test = TestService.getTest()
    }]);
});

define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_598',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 598');
    	$scope.test = TestService.getTest()
    }]);
});

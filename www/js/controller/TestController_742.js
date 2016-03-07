define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_742',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 742');
    	$scope.test = TestService.getTest()
    }]);
});

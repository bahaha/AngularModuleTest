define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_26',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 26');
    	$scope.test = TestService.getTest()
    }]);
});

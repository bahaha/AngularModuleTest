define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_916',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 916');
    	$scope.test = TestService.getTest()
    }]);
});

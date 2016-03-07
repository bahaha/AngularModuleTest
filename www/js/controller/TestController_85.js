define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_85',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 85');
    	$scope.test = TestService.getTest()
    }]);
});

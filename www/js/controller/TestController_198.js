define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_198',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 198');
    	$scope.test = TestService.getTest()
    }]);
});

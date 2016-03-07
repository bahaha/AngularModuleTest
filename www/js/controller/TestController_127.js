define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_127',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 127');
    	$scope.test = TestService.getTest()
    }]);
});

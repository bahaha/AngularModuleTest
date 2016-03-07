define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_112',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 112');
    	$scope.test = TestService.getTest()
    }]);
});

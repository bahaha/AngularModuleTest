define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_722',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 722');
    	$scope.test = TestService.getTest()
    }]);
});

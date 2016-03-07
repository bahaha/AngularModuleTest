define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_354',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 354');
    	$scope.test = TestService.getTest()
    }]);
});

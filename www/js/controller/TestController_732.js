define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_732',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 732');
    	$scope.test = TestService.getTest()
    }]);
});

define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_715',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 715');
    	$scope.test = TestService.getTest()
    }]);
});

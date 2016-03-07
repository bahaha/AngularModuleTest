define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_98',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 98');
    	$scope.test = TestService.getTest()
    }]);
});

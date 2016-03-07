define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_54',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 54');
    	$scope.test = TestService.getTest()
    }]);
});

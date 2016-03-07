define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_546',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 546');
    	$scope.test = TestService.getTest()
    }]);
});

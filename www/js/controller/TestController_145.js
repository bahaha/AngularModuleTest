define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_145',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 145');
    	$scope.test = TestService.getTest()
    }]);
});

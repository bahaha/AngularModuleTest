define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_53',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 53');
    	$scope.test = TestService.getTest()
    }]);
});

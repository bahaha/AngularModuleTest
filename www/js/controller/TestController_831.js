define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_831',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 831');
    	$scope.test = TestService.getTest()
    }]);
});

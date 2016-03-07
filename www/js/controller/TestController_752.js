define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_752',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 752');
    	$scope.test = TestService.getTest()
    }]);
});

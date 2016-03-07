define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_875',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 875');
    	$scope.test = TestService.getTest()
    }]);
});

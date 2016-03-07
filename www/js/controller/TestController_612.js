define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_612',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 612');
    	$scope.test = TestService.getTest()
    }]);
});

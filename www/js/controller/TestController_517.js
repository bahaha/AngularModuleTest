define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_517',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 517');
    	$scope.test = TestService.getTest()
    }]);
});

define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_233',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 233');
    	$scope.test = TestService.getTest()
    }]);
});

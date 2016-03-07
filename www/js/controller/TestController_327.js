define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_327',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 327');
    	$scope.test = TestService.getTest()
    }]);
});

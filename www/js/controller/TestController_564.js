define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_564',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 564');
    	$scope.test = TestService.getTest()
    }]);
});

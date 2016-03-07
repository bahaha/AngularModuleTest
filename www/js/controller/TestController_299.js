define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_299',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 299');
    	$scope.test = TestService.getTest()
    }]);
});

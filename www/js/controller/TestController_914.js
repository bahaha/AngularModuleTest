define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_914',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 914');
    	$scope.test = TestService.getTest()
    }]);
});

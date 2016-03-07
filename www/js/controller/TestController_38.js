define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_38',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 38');
    	$scope.test = TestService.getTest()
    }]);
});

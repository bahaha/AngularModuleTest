define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_967',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 967');
    	$scope.test = TestService.getTest()
    }]);
});

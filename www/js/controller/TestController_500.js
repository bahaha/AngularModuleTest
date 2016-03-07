define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_500',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 500');
    	$scope.test = TestService.getTest()
    }]);
});

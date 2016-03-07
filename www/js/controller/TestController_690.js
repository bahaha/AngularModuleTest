define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_690',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 690');
    	$scope.test = TestService.getTest()
    }]);
});

define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_72',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 72');
    	$scope.test = TestService.getTest()
    }]);
});

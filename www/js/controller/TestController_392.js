define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_392',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 392');
    	$scope.test = TestService.getTest()
    }]);
});

define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_566',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 566');
    	$scope.test = TestService.getTest()
    }]);
});

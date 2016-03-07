define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_930',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 930');
    	$scope.test = TestService.getTest()
    }]);
});

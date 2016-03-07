define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_3',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 3');
    	$scope.test = TestService.getTest()
    }]);
});

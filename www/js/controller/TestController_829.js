define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_829',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 829');
    	$scope.test = TestService.getTest()
    }]);
});

define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_669',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 669');
    	$scope.test = TestService.getTest()
    }]);
});

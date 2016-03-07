define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_509',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 509');
    	$scope.test = TestService.getTest()
    }]);
});

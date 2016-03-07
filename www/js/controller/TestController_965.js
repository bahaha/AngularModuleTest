define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_965',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 965');
    	$scope.test = TestService.getTest()
    }]);
});

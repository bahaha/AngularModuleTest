define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_124',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 124');
    	$scope.test = TestService.getTest()
    }]);
});

define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_495',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 495');
    	$scope.test = TestService.getTest()
    }]);
});

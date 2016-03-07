define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_734',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 734');
    	$scope.test = TestService.getTest()
    }]);
});

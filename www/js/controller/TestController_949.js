define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_949',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 949');
    	$scope.test = TestService.getTest()
    }]);
});

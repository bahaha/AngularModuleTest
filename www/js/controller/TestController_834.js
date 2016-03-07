define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_834',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 834');
    	$scope.test = TestService.getTest()
    }]);
});

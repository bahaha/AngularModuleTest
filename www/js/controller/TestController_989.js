define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_989',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 989');
    	$scope.test = TestService.getTest()
    }]);
});

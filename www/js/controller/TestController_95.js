define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_95',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 95');
    	$scope.test = TestService.getTest()
    }]);
});

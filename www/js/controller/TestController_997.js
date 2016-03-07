define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_997',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 997');
    	$scope.test = TestService.getTest()
    }]);
});

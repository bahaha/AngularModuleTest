define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_128',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 128');
    	$scope.test = TestService.getTest()
    }]);
});

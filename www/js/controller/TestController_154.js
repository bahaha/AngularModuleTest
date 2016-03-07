define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_154',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 154');
    	$scope.test = TestService.getTest()
    }]);
});

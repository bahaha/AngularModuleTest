define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_319',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 319');
    	$scope.test = TestService.getTest()
    }]);
});

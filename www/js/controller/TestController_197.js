define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_197',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 197');
    	$scope.test = TestService.getTest()
    }]);
});

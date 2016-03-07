define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_113',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 113');
    	$scope.test = TestService.getTest()
    }]);
});

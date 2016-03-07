define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_706',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 706');
    	$scope.test = TestService.getTest()
    }]);
});

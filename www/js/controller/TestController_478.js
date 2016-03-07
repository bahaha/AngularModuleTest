define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_478',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 478');
    	$scope.test = TestService.getTest()
    }]);
});

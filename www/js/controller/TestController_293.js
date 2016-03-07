define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_293',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 293');
    	$scope.test = TestService.getTest()
    }]);
});

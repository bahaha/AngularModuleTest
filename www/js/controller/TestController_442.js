define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_442',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 442');
    	$scope.test = TestService.getTest()
    }]);
});

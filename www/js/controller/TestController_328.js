define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_328',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 328');
    	$scope.test = TestService.getTest()
    }]);
});

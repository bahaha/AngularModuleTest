define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_122',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 122');
    	$scope.test = TestService.getTest()
    }]);
});

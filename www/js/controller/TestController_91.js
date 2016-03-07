define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_91',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 91');
    	$scope.test = TestService.getTest()
    }]);
});

define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_919',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 919');
    	$scope.test = TestService.getTest()
    }]);
});

define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_754',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 754');
    	$scope.test = TestService.getTest()
    }]);
});

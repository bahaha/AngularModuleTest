define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_942',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 942');
    	$scope.test = TestService.getTest()
    }]);
});

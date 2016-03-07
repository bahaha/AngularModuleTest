define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_662',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 662');
    	$scope.test = TestService.getTest()
    }]);
});

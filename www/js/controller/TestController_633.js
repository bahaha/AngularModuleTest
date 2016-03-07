define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_633',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 633');
    	$scope.test = TestService.getTest()
    }]);
});

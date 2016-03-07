define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_395',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 395');
    	$scope.test = TestService.getTest()
    }]);
});

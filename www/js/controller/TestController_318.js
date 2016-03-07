define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_318',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 318');
    	$scope.test = TestService.getTest()
    }]);
});

define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_348',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 348');
    	$scope.test = TestService.getTest()
    }]);
});

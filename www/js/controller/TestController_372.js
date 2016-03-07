define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_372',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 372');
    	$scope.test = TestService.getTest()
    }]);
});

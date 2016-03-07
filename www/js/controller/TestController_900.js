define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_900',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 900');
    	$scope.test = TestService.getTest()
    }]);
});

define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_684',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 684');
    	$scope.test = TestService.getTest()
    }]);
});

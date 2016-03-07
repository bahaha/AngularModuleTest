define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_466',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 466');
    	$scope.test = TestService.getTest()
    }]);
});

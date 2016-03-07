define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_414',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 414');
    	$scope.test = TestService.getTest()
    }]);
});

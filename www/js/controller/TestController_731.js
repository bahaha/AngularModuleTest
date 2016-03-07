define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_731',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 731');
    	$scope.test = TestService.getTest()
    }]);
});

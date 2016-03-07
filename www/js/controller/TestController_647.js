define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_647',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 647');
    	$scope.test = TestService.getTest()
    }]);
});

define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_307',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 307');
    	$scope.test = TestService.getTest()
    }]);
});

define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_634',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 634');
    	$scope.test = TestService.getTest()
    }]);
});

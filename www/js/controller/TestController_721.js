define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_721',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 721');
    	$scope.test = TestService.getTest()
    }]);
});

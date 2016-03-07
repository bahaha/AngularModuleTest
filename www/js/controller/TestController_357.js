define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_357',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 357');
    	$scope.test = TestService.getTest()
    }]);
});

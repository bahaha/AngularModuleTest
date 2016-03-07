define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_670',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 670');
    	$scope.test = TestService.getTest()
    }]);
});

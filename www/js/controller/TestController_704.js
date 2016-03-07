define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_704',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 704');
    	$scope.test = TestService.getTest()
    }]);
});

define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_105',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 105');
    	$scope.test = TestService.getTest()
    }]);
});

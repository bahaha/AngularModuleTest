define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_89',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 89');
    	$scope.test = TestService.getTest()
    }]);
});

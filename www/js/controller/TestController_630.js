define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_630',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 630');
    	$scope.test = TestService.getTest()
    }]);
});

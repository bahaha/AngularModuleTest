define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_295',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 295');
    	$scope.test = TestService.getTest()
    }]);
});

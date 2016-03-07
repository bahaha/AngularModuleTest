define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_865',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 865');
    	$scope.test = TestService.getTest()
    }]);
});

define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_803',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 803');
    	$scope.test = TestService.getTest()
    }]);
});

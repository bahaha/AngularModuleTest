define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_956',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 956');
    	$scope.test = TestService.getTest()
    }]);
});

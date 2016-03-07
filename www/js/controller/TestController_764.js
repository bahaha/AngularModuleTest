define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_764',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 764');
    	$scope.test = TestService.getTest()
    }]);
});

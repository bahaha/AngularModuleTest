define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_446',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 446');
    	$scope.test = TestService.getTest()
    }]);
});

define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_148',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 148');
    	$scope.test = TestService.getTest()
    }]);
});

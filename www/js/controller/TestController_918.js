define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_918',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 918');
    	$scope.test = TestService.getTest()
    }]);
});

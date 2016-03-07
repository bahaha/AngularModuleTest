define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_701',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 701');
    	$scope.test = TestService.getTest()
    }]);
});

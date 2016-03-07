define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_207',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 207');
    	$scope.test = TestService.getTest()
    }]);
});

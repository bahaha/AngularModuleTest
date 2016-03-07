define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_658',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 658');
    	$scope.test = TestService.getTest()
    }]);
});

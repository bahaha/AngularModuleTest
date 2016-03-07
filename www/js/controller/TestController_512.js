define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_512',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 512');
    	$scope.test = TestService.getTest()
    }]);
});

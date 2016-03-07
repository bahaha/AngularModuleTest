define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_322',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 322');
    	$scope.test = TestService.getTest()
    }]);
});

define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_436',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 436');
    	$scope.test = TestService.getTest()
    }]);
});

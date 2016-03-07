define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_795',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 795');
    	$scope.test = TestService.getTest()
    }]);
});

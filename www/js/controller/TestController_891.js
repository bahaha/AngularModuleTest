define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_891',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 891');
    	$scope.test = TestService.getTest()
    }]);
});

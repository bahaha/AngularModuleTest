define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_664',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 664');
    	$scope.test = TestService.getTest()
    }]);
});

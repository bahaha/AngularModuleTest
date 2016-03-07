define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_230',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 230');
    	$scope.test = TestService.getTest()
    }]);
});

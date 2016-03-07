define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_119',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 119');
    	$scope.test = TestService.getTest()
    }]);
});

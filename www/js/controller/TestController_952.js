define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_952',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 952');
    	$scope.test = TestService.getTest()
    }]);
});

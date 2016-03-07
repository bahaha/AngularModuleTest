define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_178',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 178');
    	$scope.test = TestService.getTest()
    }]);
});

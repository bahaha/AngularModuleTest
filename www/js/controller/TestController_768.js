define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_768',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 768');
    	$scope.test = TestService.getTest()
    }]);
});

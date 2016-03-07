define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_972',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 972');
    	$scope.test = TestService.getTest()
    }]);
});

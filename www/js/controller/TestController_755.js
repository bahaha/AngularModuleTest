define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_755',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 755');
    	$scope.test = TestService.getTest()
    }]);
});

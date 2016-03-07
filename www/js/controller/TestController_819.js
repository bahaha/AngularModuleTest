define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_819',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 819');
    	$scope.test = TestService.getTest()
    }]);
});

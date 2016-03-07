define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_219',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 219');
    	$scope.test = TestService.getTest()
    }]);
});

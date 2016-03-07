define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_232',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 232');
    	$scope.test = TestService.getTest()
    }]);
});

define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_765',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 765');
    	$scope.test = TestService.getTest()
    }]);
});

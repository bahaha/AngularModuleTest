define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_619',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 619');
    	$scope.test = TestService.getTest()
    }]);
});

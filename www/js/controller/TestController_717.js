define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_717',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 717');
    	$scope.test = TestService.getTest()
    }]);
});

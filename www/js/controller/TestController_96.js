define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_96',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 96');
    	$scope.test = TestService.getTest()
    }]);
});

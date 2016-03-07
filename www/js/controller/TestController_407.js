define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_407',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 407');
    	$scope.test = TestService.getTest()
    }]);
});

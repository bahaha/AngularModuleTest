define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_975',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 975');
    	$scope.test = TestService.getTest()
    }]);
});

define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_843',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 843');
    	$scope.test = TestService.getTest()
    }]);
});

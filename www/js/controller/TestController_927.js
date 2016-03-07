define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_927',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 927');
    	$scope.test = TestService.getTest()
    }]);
});

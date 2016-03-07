define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_163',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 163');
    	$scope.test = TestService.getTest()
    }]);
});

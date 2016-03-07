define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_428',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 428');
    	$scope.test = TestService.getTest()
    }]);
});

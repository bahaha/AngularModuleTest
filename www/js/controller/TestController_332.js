define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_332',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 332');
    	$scope.test = TestService.getTest()
    }]);
});

define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_326',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 326');
    	$scope.test = TestService.getTest()
    }]);
});

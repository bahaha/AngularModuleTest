define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_349',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 349');
    	$scope.test = TestService.getTest()
    }]);
});

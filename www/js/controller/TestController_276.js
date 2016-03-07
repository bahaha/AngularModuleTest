define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_276',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 276');
    	$scope.test = TestService.getTest()
    }]);
});

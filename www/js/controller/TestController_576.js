define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_576',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 576');
    	$scope.test = TestService.getTest()
    }]);
});

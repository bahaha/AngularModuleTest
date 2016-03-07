define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_763',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 763');
    	$scope.test = TestService.getTest()
    }]);
});

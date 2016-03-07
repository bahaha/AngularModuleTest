define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_801',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 801');
    	$scope.test = TestService.getTest()
    }]);
});

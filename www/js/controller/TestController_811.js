define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_811',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 811');
    	$scope.test = TestService.getTest()
    }]);
});

define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_269',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 269');
    	$scope.test = TestService.getTest()
    }]);
});

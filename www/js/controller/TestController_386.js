define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_386',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 386');
    	$scope.test = TestService.getTest()
    }]);
});

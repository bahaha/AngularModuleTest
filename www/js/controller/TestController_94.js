define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_94',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 94');
    	$scope.test = TestService.getTest()
    }]);
});

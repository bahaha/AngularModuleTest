define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_310',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 310');
    	$scope.test = TestService.getTest()
    }]);
});

define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_338',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 338');
    	$scope.test = TestService.getTest()
    }]);
});

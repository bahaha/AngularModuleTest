define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_966',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 966');
    	$scope.test = TestService.getTest()
    }]);
});

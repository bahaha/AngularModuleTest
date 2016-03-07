define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_784',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 784');
    	$scope.test = TestService.getTest()
    }]);
});

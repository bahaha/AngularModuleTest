define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_185',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 185');
    	$scope.test = TestService.getTest()
    }]);
});

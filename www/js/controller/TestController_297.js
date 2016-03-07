define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_297',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 297');
    	$scope.test = TestService.getTest()
    }]);
});

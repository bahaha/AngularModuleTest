define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_136',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 136');
    	$scope.test = TestService.getTest()
    }]);
});

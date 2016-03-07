define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_528',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 528');
    	$scope.test = TestService.getTest()
    }]);
});

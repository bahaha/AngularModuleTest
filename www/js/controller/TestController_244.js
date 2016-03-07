define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_244',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 244');
    	$scope.test = TestService.getTest()
    }]);
});

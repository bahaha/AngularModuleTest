define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_682',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 682');
    	$scope.test = TestService.getTest()
    }]);
});

define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_724',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 724');
    	$scope.test = TestService.getTest()
    }]);
});

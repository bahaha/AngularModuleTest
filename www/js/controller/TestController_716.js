define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_716',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 716');
    	$scope.test = TestService.getTest()
    }]);
});

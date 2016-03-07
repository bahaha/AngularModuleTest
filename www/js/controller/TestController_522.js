define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_522',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 522');
    	$scope.test = TestService.getTest()
    }]);
});

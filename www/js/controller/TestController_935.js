define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_935',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 935');
    	$scope.test = TestService.getTest()
    }]);
});

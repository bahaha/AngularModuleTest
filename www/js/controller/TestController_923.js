define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_923',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 923');
    	$scope.test = TestService.getTest()
    }]);
});

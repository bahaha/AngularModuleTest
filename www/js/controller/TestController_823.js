define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_823',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 823');
    	$scope.test = TestService.getTest()
    }]);
});

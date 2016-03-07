define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_613',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 613');
    	$scope.test = TestService.getTest()
    }]);
});

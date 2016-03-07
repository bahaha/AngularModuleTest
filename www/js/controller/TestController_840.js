define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_840',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 840');
    	$scope.test = TestService.getTest()
    }]);
});

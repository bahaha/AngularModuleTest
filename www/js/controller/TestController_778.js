define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_778',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 778');
    	$scope.test = TestService.getTest()
    }]);
});

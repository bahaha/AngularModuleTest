define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_940',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 940');
    	$scope.test = TestService.getTest()
    }]);
});

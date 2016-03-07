define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_672',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 672');
    	$scope.test = TestService.getTest()
    }]);
});

define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_781',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 781');
    	$scope.test = TestService.getTest()
    }]);
});

define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_825',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 825');
    	$scope.test = TestService.getTest()
    }]);
});

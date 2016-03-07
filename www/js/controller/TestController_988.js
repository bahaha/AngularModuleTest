define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_988',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 988');
    	$scope.test = TestService.getTest()
    }]);
});

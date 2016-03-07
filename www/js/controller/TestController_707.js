define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_707',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 707');
    	$scope.test = TestService.getTest()
    }]);
});

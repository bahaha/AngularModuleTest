define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_300',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 300');
    	$scope.test = TestService.getTest()
    }]);
});

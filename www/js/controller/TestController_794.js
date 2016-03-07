define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_794',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 794');
    	$scope.test = TestService.getTest()
    }]);
});

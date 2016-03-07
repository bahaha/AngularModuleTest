define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_970',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 970');
    	$scope.test = TestService.getTest()
    }]);
});

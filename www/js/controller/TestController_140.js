define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_140',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 140');
    	$scope.test = TestService.getTest()
    }]);
});

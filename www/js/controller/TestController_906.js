define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_906',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 906');
    	$scope.test = TestService.getTest()
    }]);
});

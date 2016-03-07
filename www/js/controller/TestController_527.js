define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_527',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 527');
    	$scope.test = TestService.getTest()
    }]);
});

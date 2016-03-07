define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_425',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 425');
    	$scope.test = TestService.getTest()
    }]);
});

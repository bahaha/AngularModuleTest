define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_702',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 702');
    	$scope.test = TestService.getTest()
    }]);
});

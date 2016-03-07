define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_995',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 995');
    	$scope.test = TestService.getTest()
    }]);
});

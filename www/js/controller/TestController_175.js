angular.module('TestController_175', ['TestService'])
	.controller('Controller_175', function($scope, $state, TestService){
		console.log('enter controller_175')
		$scope.test = TestService.getTest()
	})

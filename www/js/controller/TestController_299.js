angular.module('TestController_299', ['TestService'])
	.controller('Controller_299', function($scope, $state, TestService){
		console.log('enter controller_299')
		$scope.test = TestService.getTest()
	})

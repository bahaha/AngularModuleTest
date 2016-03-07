angular.module('TestController_314', ['TestService'])
	.controller('Controller_314', function($scope, $state, TestService){
		console.log('enter controller_314')
		$scope.test = TestService.getTest()
	})

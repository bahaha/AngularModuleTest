angular.module('TestController_183', ['TestService'])
	.controller('Controller_183', function($scope, $state, TestService){
		console.log('enter controller_183')
		$scope.test = TestService.getTest()
	})

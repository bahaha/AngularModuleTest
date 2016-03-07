angular.module('TestController_948', ['TestService'])
	.controller('Controller_948', function($scope, $state, TestService){
		console.log('enter controller_948')
		$scope.test = TestService.getTest()
	})

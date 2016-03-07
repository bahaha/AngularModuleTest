angular.module('TestController_613', ['TestService'])
	.controller('Controller_613', function($scope, $state, TestService){
		console.log('enter controller_613')
		$scope.test = TestService.getTest()
	})

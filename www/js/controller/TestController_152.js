angular.module('TestController_152', ['TestService'])
	.controller('Controller_152', function($scope, $state, TestService){
		console.log('enter controller_152')
		$scope.test = TestService.getTest()
	})

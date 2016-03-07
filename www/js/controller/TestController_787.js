angular.module('TestController_787', ['TestService'])
	.controller('Controller_787', function($scope, $state, TestService){
		console.log('enter controller_787')
		$scope.test = TestService.getTest()
	})

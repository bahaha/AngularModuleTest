angular.module('TestController_986', ['TestService'])
	.controller('Controller_986', function($scope, $state, TestService){
		console.log('enter controller_986')
		$scope.test = TestService.getTest()
	})

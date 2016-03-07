angular.module('TestController_601', ['TestService'])
	.controller('Controller_601', function($scope, $state, TestService){
		console.log('enter controller_601')
		$scope.test = TestService.getTest()
	})

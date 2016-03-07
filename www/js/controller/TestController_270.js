angular.module('TestController_270', ['TestService'])
	.controller('Controller_270', function($scope, $state, TestService){
		console.log('enter controller_270')
		$scope.test = TestService.getTest()
	})

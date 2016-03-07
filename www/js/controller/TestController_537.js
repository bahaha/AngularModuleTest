angular.module('TestController_537', ['TestService'])
	.controller('Controller_537', function($scope, $state, TestService){
		console.log('enter controller_537')
		$scope.test = TestService.getTest()
	})

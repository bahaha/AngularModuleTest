angular.module('TestController_586', ['TestService'])
	.controller('Controller_586', function($scope, $state, TestService){
		console.log('enter controller_586')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_473', ['TestService'])
	.controller('Controller_473', function($scope, $state, TestService){
		console.log('enter controller_473')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_110', ['TestService'])
	.controller('Controller_110', function($scope, $state, TestService){
		console.log('enter controller_110')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_596', ['TestService'])
	.controller('Controller_596', function($scope, $state, TestService){
		console.log('enter controller_596')
		$scope.test = TestService.getTest()
	})

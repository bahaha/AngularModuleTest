angular.module('TestController_841', ['TestService'])
	.controller('Controller_841', function($scope, $state, TestService){
		console.log('enter controller_841')
		$scope.test = TestService.getTest()
	})

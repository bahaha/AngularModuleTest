angular.module('TestController_230', ['TestService'])
	.controller('Controller_230', function($scope, $state, TestService){
		console.log('enter controller_230')
		$scope.test = TestService.getTest()
	})

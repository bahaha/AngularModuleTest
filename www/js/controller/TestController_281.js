angular.module('TestController_281', ['TestService'])
	.controller('Controller_281', function($scope, $state, TestService){
		console.log('enter controller_281')
		$scope.test = TestService.getTest()
	})

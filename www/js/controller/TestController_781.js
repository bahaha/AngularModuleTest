angular.module('TestController_781', ['TestService'])
	.controller('Controller_781', function($scope, $state, TestService){
		console.log('enter controller_781')
		$scope.test = TestService.getTest()
	})

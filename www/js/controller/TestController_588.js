angular.module('TestController_588', ['TestService'])
	.controller('Controller_588', function($scope, $state, TestService){
		console.log('enter controller_588')
		$scope.test = TestService.getTest()
	})

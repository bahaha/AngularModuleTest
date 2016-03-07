angular.module('TestController_393', ['TestService'])
	.controller('Controller_393', function($scope, $state, TestService){
		console.log('enter controller_393')
		$scope.test = TestService.getTest()
	})

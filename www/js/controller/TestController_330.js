angular.module('TestController_330', ['TestService'])
	.controller('Controller_330', function($scope, $state, TestService){
		console.log('enter controller_330')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_385', ['TestService'])
	.controller('Controller_385', function($scope, $state, TestService){
		console.log('enter controller_385')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_86', ['TestService'])
	.controller('Controller_86', function($scope, $state, TestService){
		console.log('enter controller_86')
		$scope.test = TestService.getTest()
	})

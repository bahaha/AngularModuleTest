angular.module('TestController_74', ['TestService'])
	.controller('Controller_74', function($scope, $state, TestService){
		console.log('enter controller_74')
		$scope.test = TestService.getTest()
	})

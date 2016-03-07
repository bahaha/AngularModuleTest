angular.module('TestController_532', ['TestService'])
	.controller('Controller_532', function($scope, $state, TestService){
		console.log('enter controller_532')
		$scope.test = TestService.getTest()
	})

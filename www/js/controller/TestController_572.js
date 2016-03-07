angular.module('TestController_572', ['TestService'])
	.controller('Controller_572', function($scope, $state, TestService){
		console.log('enter controller_572')
		$scope.test = TestService.getTest()
	})

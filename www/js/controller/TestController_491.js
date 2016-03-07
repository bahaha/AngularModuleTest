angular.module('TestController_491', ['TestService'])
	.controller('Controller_491', function($scope, $state, TestService){
		console.log('enter controller_491')
		$scope.test = TestService.getTest()
	})

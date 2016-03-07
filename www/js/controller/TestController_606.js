angular.module('TestController_606', ['TestService'])
	.controller('Controller_606', function($scope, $state, TestService){
		console.log('enter controller_606')
		$scope.test = TestService.getTest()
	})

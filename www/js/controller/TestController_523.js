angular.module('TestController_523', ['TestService'])
	.controller('Controller_523', function($scope, $state, TestService){
		console.log('enter controller_523')
		$scope.test = TestService.getTest()
	})

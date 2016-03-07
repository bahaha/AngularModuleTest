angular.module('TestController_729', ['TestService'])
	.controller('Controller_729', function($scope, $state, TestService){
		console.log('enter controller_729')
		$scope.test = TestService.getTest()
	})

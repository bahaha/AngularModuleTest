angular.module('TestController_576', ['TestService'])
	.controller('Controller_576', function($scope, $state, TestService){
		console.log('enter controller_576')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_834', ['TestService'])
	.controller('Controller_834', function($scope, $state, TestService){
		console.log('enter controller_834')
		$scope.test = TestService.getTest()
	})

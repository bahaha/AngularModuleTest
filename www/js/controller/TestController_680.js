angular.module('TestController_680', ['TestService'])
	.controller('Controller_680', function($scope, $state, TestService){
		console.log('enter controller_680')
		$scope.test = TestService.getTest()
	})

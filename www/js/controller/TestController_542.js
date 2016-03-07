angular.module('TestController_542', ['TestService'])
	.controller('Controller_542', function($scope, $state, TestService){
		console.log('enter controller_542')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_156', ['TestService'])
	.controller('Controller_156', function($scope, $state, TestService){
		console.log('enter controller_156')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_191', ['TestService'])
	.controller('Controller_191', function($scope, $state, TestService){
		console.log('enter controller_191')
		$scope.test = TestService.getTest()
	})

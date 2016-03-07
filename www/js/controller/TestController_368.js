angular.module('TestController_368', ['TestService'])
	.controller('Controller_368', function($scope, $state, TestService){
		console.log('enter controller_368')
		$scope.test = TestService.getTest()
	})

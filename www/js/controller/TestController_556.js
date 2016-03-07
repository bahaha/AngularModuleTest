angular.module('TestController_556', ['TestService'])
	.controller('Controller_556', function($scope, $state, TestService){
		console.log('enter controller_556')
		$scope.test = TestService.getTest()
	})

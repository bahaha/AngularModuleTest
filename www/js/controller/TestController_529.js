angular.module('TestController_529', ['TestService'])
	.controller('Controller_529', function($scope, $state, TestService){
		console.log('enter controller_529')
		$scope.test = TestService.getTest()
	})

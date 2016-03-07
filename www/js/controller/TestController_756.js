angular.module('TestController_756', ['TestService'])
	.controller('Controller_756', function($scope, $state, TestService){
		console.log('enter controller_756')
		$scope.test = TestService.getTest()
	})

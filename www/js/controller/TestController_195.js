angular.module('TestController_195', ['TestService'])
	.controller('Controller_195', function($scope, $state, TestService){
		console.log('enter controller_195')
		$scope.test = TestService.getTest()
	})

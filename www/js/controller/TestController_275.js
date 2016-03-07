angular.module('TestController_275', ['TestService'])
	.controller('Controller_275', function($scope, $state, TestService){
		console.log('enter controller_275')
		$scope.test = TestService.getTest()
	})

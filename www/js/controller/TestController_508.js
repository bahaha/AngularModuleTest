angular.module('TestController_508', ['TestService'])
	.controller('Controller_508', function($scope, $state, TestService){
		console.log('enter controller_508')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_125', ['TestService'])
	.controller('Controller_125', function($scope, $state, TestService){
		console.log('enter controller_125')
		$scope.test = TestService.getTest()
	})

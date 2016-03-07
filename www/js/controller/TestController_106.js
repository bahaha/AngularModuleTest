angular.module('TestController_106', ['TestService'])
	.controller('Controller_106', function($scope, $state, TestService){
		console.log('enter controller_106')
		$scope.test = TestService.getTest()
	})

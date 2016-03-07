angular.module('TestController_94', ['TestService'])
	.controller('Controller_94', function($scope, $state, TestService){
		console.log('enter controller_94')
		$scope.test = TestService.getTest()
	})

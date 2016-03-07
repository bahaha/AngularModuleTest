angular.module('TestController_975', ['TestService'])
	.controller('Controller_975', function($scope, $state, TestService){
		console.log('enter controller_975')
		$scope.test = TestService.getTest()
	})

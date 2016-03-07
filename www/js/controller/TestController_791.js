angular.module('TestController_791', ['TestService'])
	.controller('Controller_791', function($scope, $state, TestService){
		console.log('enter controller_791')
		$scope.test = TestService.getTest()
	})

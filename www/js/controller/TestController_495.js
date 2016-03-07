angular.module('TestController_495', ['TestService'])
	.controller('Controller_495', function($scope, $state, TestService){
		console.log('enter controller_495')
		$scope.test = TestService.getTest()
	})

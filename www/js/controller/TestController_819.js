angular.module('TestController_819', ['TestService'])
	.controller('Controller_819', function($scope, $state, TestService){
		console.log('enter controller_819')
		$scope.test = TestService.getTest()
	})

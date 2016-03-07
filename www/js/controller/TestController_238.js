angular.module('TestController_238', ['TestService'])
	.controller('Controller_238', function($scope, $state, TestService){
		console.log('enter controller_238')
		$scope.test = TestService.getTest()
	})

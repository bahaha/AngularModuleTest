angular.module('TestController_107', ['TestService'])
	.controller('Controller_107', function($scope, $state, TestService){
		console.log('enter controller_107')
		$scope.test = TestService.getTest()
	})

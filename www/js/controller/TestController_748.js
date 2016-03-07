angular.module('TestController_748', ['TestService'])
	.controller('Controller_748', function($scope, $state, TestService){
		console.log('enter controller_748')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_797', ['TestService'])
	.controller('Controller_797', function($scope, $state, TestService){
		console.log('enter controller_797')
		$scope.test = TestService.getTest()
	})

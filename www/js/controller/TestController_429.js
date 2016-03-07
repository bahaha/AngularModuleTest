angular.module('TestController_429', ['TestService'])
	.controller('Controller_429', function($scope, $state, TestService){
		console.log('enter controller_429')
		$scope.test = TestService.getTest()
	})

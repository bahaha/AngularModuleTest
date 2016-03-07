angular.module('TestController_646', ['TestService'])
	.controller('Controller_646', function($scope, $state, TestService){
		console.log('enter controller_646')
		$scope.test = TestService.getTest()
	})

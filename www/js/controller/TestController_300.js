angular.module('TestController_300', ['TestService'])
	.controller('Controller_300', function($scope, $state, TestService){
		console.log('enter controller_300')
		$scope.test = TestService.getTest()
	})

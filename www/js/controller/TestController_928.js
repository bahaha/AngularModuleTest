angular.module('TestController_928', ['TestService'])
	.controller('Controller_928', function($scope, $state, TestService){
		console.log('enter controller_928')
		$scope.test = TestService.getTest()
	})

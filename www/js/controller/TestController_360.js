angular.module('TestController_360', ['TestService'])
	.controller('Controller_360', function($scope, $state, TestService){
		console.log('enter controller_360')
		$scope.test = TestService.getTest()
	})

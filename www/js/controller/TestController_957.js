angular.module('TestController_957', ['TestService'])
	.controller('Controller_957', function($scope, $state, TestService){
		console.log('enter controller_957')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_483', ['TestService'])
	.controller('Controller_483', function($scope, $state, TestService){
		console.log('enter controller_483')
		$scope.test = TestService.getTest()
	})

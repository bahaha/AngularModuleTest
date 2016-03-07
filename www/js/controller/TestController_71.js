angular.module('TestController_71', ['TestService'])
	.controller('Controller_71', function($scope, $state, TestService){
		console.log('enter controller_71')
		$scope.test = TestService.getTest()
	})

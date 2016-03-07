angular.module('TestController_451', ['TestService'])
	.controller('Controller_451', function($scope, $state, TestService){
		console.log('enter controller_451')
		$scope.test = TestService.getTest()
	})

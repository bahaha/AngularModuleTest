angular.module('TestController_92', ['TestService'])
	.controller('Controller_92', function($scope, $state, TestService){
		console.log('enter controller_92')
		$scope.test = TestService.getTest()
	})

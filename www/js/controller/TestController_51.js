angular.module('TestController_51', ['TestService'])
	.controller('Controller_51', function($scope, $state, TestService){
		console.log('enter controller_51')
		$scope.test = TestService.getTest()
	})

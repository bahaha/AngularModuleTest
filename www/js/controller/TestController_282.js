angular.module('TestController_282', ['TestService'])
	.controller('Controller_282', function($scope, $state, TestService){
		console.log('enter controller_282')
		$scope.test = TestService.getTest()
	})

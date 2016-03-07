angular.module('TestController_595', ['TestService'])
	.controller('Controller_595', function($scope, $state, TestService){
		console.log('enter controller_595')
		$scope.test = TestService.getTest()
	})

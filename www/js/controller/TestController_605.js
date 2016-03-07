angular.module('TestController_605', ['TestService'])
	.controller('Controller_605', function($scope, $state, TestService){
		console.log('enter controller_605')
		$scope.test = TestService.getTest()
	})

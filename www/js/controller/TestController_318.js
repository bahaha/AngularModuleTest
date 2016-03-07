angular.module('TestController_318', ['TestService'])
	.controller('Controller_318', function($scope, $state, TestService){
		console.log('enter controller_318')
		$scope.test = TestService.getTest()
	})

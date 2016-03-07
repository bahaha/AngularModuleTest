angular.module('TestController_979', ['TestService'])
	.controller('Controller_979', function($scope, $state, TestService){
		console.log('enter controller_979')
		$scope.test = TestService.getTest()
	})

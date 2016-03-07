angular.module('TestController_408', ['TestService'])
	.controller('Controller_408', function($scope, $state, TestService){
		console.log('enter controller_408')
		$scope.test = TestService.getTest()
	})

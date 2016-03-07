angular.module('TestController_428', ['TestService'])
	.controller('Controller_428', function($scope, $state, TestService){
		console.log('enter controller_428')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_754', ['TestService'])
	.controller('Controller_754', function($scope, $state, TestService){
		console.log('enter controller_754')
		$scope.test = TestService.getTest()
	})

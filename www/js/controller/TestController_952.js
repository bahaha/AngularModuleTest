angular.module('TestController_952', ['TestService'])
	.controller('Controller_952', function($scope, $state, TestService){
		console.log('enter controller_952')
		$scope.test = TestService.getTest()
	})

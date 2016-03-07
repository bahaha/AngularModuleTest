angular.module('TestController_442', ['TestService'])
	.controller('Controller_442', function($scope, $state, TestService){
		console.log('enter controller_442')
		$scope.test = TestService.getTest()
	})

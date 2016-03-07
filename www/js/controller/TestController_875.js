angular.module('TestController_875', ['TestService'])
	.controller('Controller_875', function($scope, $state, TestService){
		console.log('enter controller_875')
		$scope.test = TestService.getTest()
	})

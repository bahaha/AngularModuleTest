angular.module('TestController_711', ['TestService'])
	.controller('Controller_711', function($scope, $state, TestService){
		console.log('enter controller_711')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_36', ['TestService'])
	.controller('Controller_36', function($scope, $state, TestService){
		console.log('enter controller_36')
		$scope.test = TestService.getTest()
	})

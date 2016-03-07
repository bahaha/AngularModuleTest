angular.module('TestController_101', ['TestService'])
	.controller('Controller_101', function($scope, $state, TestService){
		console.log('enter controller_101')
		$scope.test = TestService.getTest()
	})

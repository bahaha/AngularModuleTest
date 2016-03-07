angular.module('TestController_954', ['TestService'])
	.controller('Controller_954', function($scope, $state, TestService){
		console.log('enter controller_954')
		$scope.test = TestService.getTest()
	})

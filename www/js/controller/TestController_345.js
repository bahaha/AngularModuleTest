angular.module('TestController_345', ['TestService'])
	.controller('Controller_345', function($scope, $state, TestService){
		console.log('enter controller_345')
		$scope.test = TestService.getTest()
	})

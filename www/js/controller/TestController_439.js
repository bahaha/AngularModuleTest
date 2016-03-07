angular.module('TestController_439', ['TestService'])
	.controller('Controller_439', function($scope, $state, TestService){
		console.log('enter controller_439')
		$scope.test = TestService.getTest()
	})

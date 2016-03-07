angular.module('TestController_487', ['TestService'])
	.controller('Controller_487', function($scope, $state, TestService){
		console.log('enter controller_487')
		$scope.test = TestService.getTest()
	})

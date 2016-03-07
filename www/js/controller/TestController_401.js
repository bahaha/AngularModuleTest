angular.module('TestController_401', ['TestService'])
	.controller('Controller_401', function($scope, $state, TestService){
		console.log('enter controller_401')
		$scope.test = TestService.getTest()
	})

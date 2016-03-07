angular.module('TestController_409', ['TestService'])
	.controller('Controller_409', function($scope, $state, TestService){
		console.log('enter controller_409')
		$scope.test = TestService.getTest()
	})

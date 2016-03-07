angular.module('TestController_294', ['TestService'])
	.controller('Controller_294', function($scope, $state, TestService){
		console.log('enter controller_294')
		$scope.test = TestService.getTest()
	})

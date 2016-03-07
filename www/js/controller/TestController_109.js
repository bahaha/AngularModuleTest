angular.module('TestController_109', ['TestService'])
	.controller('Controller_109', function($scope, $state, TestService){
		console.log('enter controller_109')
		$scope.test = TestService.getTest()
	})

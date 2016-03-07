angular.module('TestController_703', ['TestService'])
	.controller('Controller_703', function($scope, $state, TestService){
		console.log('enter controller_703')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_219', ['TestService'])
	.controller('Controller_219', function($scope, $state, TestService){
		console.log('enter controller_219')
		$scope.test = TestService.getTest()
	})

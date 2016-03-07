angular.module('TestController_573', ['TestService'])
	.controller('Controller_573', function($scope, $state, TestService){
		console.log('enter controller_573')
		$scope.test = TestService.getTest()
	})

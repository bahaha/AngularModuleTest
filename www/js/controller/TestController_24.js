angular.module('TestController_24', ['TestService'])
	.controller('Controller_24', function($scope, $state, TestService){
		console.log('enter controller_24')
		$scope.test = TestService.getTest()
	})

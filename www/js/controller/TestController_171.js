angular.module('TestController_171', ['TestService'])
	.controller('Controller_171', function($scope, $state, TestService){
		console.log('enter controller_171')
		$scope.test = TestService.getTest()
	})

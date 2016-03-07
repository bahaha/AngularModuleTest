angular.module('TestController_569', ['TestService'])
	.controller('Controller_569', function($scope, $state, TestService){
		console.log('enter controller_569')
		$scope.test = TestService.getTest()
	})

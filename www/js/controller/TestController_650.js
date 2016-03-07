angular.module('TestController_650', ['TestService'])
	.controller('Controller_650', function($scope, $state, TestService){
		console.log('enter controller_650')
		$scope.test = TestService.getTest()
	})

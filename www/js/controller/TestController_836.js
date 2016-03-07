angular.module('TestController_836', ['TestService'])
	.controller('Controller_836', function($scope, $state, TestService){
		console.log('enter controller_836')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_818', ['TestService'])
	.controller('Controller_818', function($scope, $state, TestService){
		console.log('enter controller_818')
		$scope.test = TestService.getTest()
	})

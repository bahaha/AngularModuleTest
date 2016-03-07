angular.module('TestController_621', ['TestService'])
	.controller('Controller_621', function($scope, $state, TestService){
		console.log('enter controller_621')
		$scope.test = TestService.getTest()
	})

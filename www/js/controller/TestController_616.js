angular.module('TestController_616', ['TestService'])
	.controller('Controller_616', function($scope, $state, TestService){
		console.log('enter controller_616')
		$scope.test = TestService.getTest()
	})

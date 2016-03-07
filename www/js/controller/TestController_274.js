angular.module('TestController_274', ['TestService'])
	.controller('Controller_274', function($scope, $state, TestService){
		console.log('enter controller_274')
		$scope.test = TestService.getTest()
	})

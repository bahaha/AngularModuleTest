angular.module('TestController_599', ['TestService'])
	.controller('Controller_599', function($scope, $state, TestService){
		console.log('enter controller_599')
		$scope.test = TestService.getTest()
	})

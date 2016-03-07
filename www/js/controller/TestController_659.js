angular.module('TestController_659', ['TestService'])
	.controller('Controller_659', function($scope, $state, TestService){
		console.log('enter controller_659')
		$scope.test = TestService.getTest()
	})

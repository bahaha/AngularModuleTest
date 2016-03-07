angular.module('TestController_845', ['TestService'])
	.controller('Controller_845', function($scope, $state, TestService){
		console.log('enter controller_845')
		$scope.test = TestService.getTest()
	})

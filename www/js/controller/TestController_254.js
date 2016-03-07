angular.module('TestController_254', ['TestService'])
	.controller('Controller_254', function($scope, $state, TestService){
		console.log('enter controller_254')
		$scope.test = TestService.getTest()
	})

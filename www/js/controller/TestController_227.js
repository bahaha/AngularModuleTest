angular.module('TestController_227', ['TestService'])
	.controller('Controller_227', function($scope, $state, TestService){
		console.log('enter controller_227')
		$scope.test = TestService.getTest()
	})

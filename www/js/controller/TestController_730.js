angular.module('TestController_730', ['TestService'])
	.controller('Controller_730', function($scope, $state, TestService){
		console.log('enter controller_730')
		$scope.test = TestService.getTest()
	})

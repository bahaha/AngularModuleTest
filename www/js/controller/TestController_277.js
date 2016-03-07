angular.module('TestController_277', ['TestService'])
	.controller('Controller_277', function($scope, $state, TestService){
		console.log('enter controller_277')
		$scope.test = TestService.getTest()
	})

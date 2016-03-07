angular.module('TestController_494', ['TestService'])
	.controller('Controller_494', function($scope, $state, TestService){
		console.log('enter controller_494')
		$scope.test = TestService.getTest()
	})

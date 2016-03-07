angular.module('TestController_998', ['TestService'])
	.controller('Controller_998', function($scope, $state, TestService){
		console.log('enter controller_998')
		$scope.test = TestService.getTest()
	})

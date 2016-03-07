angular.module('TestController_60', ['TestService'])
	.controller('Controller_60', function($scope, $state, TestService){
		console.log('enter controller_60')
		$scope.test = TestService.getTest()
	})

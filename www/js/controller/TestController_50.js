angular.module('TestController_50', ['TestService'])
	.controller('Controller_50', function($scope, $state, TestService){
		console.log('enter controller_50')
		$scope.test = TestService.getTest()
	})

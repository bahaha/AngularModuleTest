angular.module('TestController_80', ['TestService'])
	.controller('Controller_80', function($scope, $state, TestService){
		console.log('enter controller_80')
		$scope.test = TestService.getTest()
	})

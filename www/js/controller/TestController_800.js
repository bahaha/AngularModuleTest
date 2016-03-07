angular.module('TestController_800', ['TestService'])
	.controller('Controller_800', function($scope, $state, TestService){
		console.log('enter controller_800')
		$scope.test = TestService.getTest()
	})

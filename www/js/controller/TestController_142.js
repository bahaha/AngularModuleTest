angular.module('TestController_142', ['TestService'])
	.controller('Controller_142', function($scope, $state, TestService){
		console.log('enter controller_142')
		$scope.test = TestService.getTest()
	})

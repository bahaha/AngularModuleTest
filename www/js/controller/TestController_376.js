angular.module('TestController_376', ['TestService'])
	.controller('Controller_376', function($scope, $state, TestService){
		console.log('enter controller_376')
		$scope.test = TestService.getTest()
	})

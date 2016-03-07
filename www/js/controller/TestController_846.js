angular.module('TestController_846', ['TestService'])
	.controller('Controller_846', function($scope, $state, TestService){
		console.log('enter controller_846')
		$scope.test = TestService.getTest()
	})

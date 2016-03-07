angular.module('TestController_853', ['TestService'])
	.controller('Controller_853', function($scope, $state, TestService){
		console.log('enter controller_853')
		$scope.test = TestService.getTest()
	})

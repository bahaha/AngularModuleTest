angular.module('TestController_28', ['TestService'])
	.controller('Controller_28', function($scope, $state, TestService){
		console.log('enter controller_28')
		$scope.test = TestService.getTest()
	})

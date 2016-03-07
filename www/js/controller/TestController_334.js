angular.module('TestController_334', ['TestService'])
	.controller('Controller_334', function($scope, $state, TestService){
		console.log('enter controller_334')
		$scope.test = TestService.getTest()
	})

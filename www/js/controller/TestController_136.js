angular.module('TestController_136', ['TestService'])
	.controller('Controller_136', function($scope, $state, TestService){
		console.log('enter controller_136')
		$scope.test = TestService.getTest()
	})

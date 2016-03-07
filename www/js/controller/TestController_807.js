angular.module('TestController_807', ['TestService'])
	.controller('Controller_807', function($scope, $state, TestService){
		console.log('enter controller_807')
		$scope.test = TestService.getTest()
	})

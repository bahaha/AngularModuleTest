angular.module('TestController_942', ['TestService'])
	.controller('Controller_942', function($scope, $state, TestService){
		console.log('enter controller_942')
		$scope.test = TestService.getTest()
	})

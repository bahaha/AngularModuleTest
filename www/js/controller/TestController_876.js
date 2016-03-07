angular.module('TestController_876', ['TestService'])
	.controller('Controller_876', function($scope, $state, TestService){
		console.log('enter controller_876')
		$scope.test = TestService.getTest()
	})

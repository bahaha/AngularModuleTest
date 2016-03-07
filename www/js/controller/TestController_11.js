angular.module('TestController_11', ['TestService'])
	.controller('Controller_11', function($scope, $state, TestService){
		console.log('enter controller_11')
		$scope.test = TestService.getTest()
	})

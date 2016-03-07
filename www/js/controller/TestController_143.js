angular.module('TestController_143', ['TestService'])
	.controller('Controller_143', function($scope, $state, TestService){
		console.log('enter controller_143')
		$scope.test = TestService.getTest()
	})

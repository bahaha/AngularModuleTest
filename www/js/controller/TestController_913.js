angular.module('TestController_913', ['TestService'])
	.controller('Controller_913', function($scope, $state, TestService){
		console.log('enter controller_913')
		$scope.test = TestService.getTest()
	})

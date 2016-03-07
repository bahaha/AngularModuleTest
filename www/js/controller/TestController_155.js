angular.module('TestController_155', ['TestService'])
	.controller('Controller_155', function($scope, $state, TestService){
		console.log('enter controller_155')
		$scope.test = TestService.getTest()
	})

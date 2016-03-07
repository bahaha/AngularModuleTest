angular.module('TestController_974', ['TestService'])
	.controller('Controller_974', function($scope, $state, TestService){
		console.log('enter controller_974')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_870', ['TestService'])
	.controller('Controller_870', function($scope, $state, TestService){
		console.log('enter controller_870')
		$scope.test = TestService.getTest()
	})

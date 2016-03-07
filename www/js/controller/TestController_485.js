angular.module('TestController_485', ['TestService'])
	.controller('Controller_485', function($scope, $state, TestService){
		console.log('enter controller_485')
		$scope.test = TestService.getTest()
	})

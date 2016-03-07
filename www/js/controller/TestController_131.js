angular.module('TestController_131', ['TestService'])
	.controller('Controller_131', function($scope, $state, TestService){
		console.log('enter controller_131')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_806', ['TestService'])
	.controller('Controller_806', function($scope, $state, TestService){
		console.log('enter controller_806')
		$scope.test = TestService.getTest()
	})

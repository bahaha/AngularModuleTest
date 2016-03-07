angular.module('TestController_967', ['TestService'])
	.controller('Controller_967', function($scope, $state, TestService){
		console.log('enter controller_967')
		$scope.test = TestService.getTest()
	})

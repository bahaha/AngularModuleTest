angular.module('TestController_232', ['TestService'])
	.controller('Controller_232', function($scope, $state, TestService){
		console.log('enter controller_232')
		$scope.test = TestService.getTest()
	})

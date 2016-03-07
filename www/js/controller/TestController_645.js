angular.module('TestController_645', ['TestService'])
	.controller('Controller_645', function($scope, $state, TestService){
		console.log('enter controller_645')
		$scope.test = TestService.getTest()
	})

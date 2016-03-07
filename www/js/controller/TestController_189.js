angular.module('TestController_189', ['TestService'])
	.controller('Controller_189', function($scope, $state, TestService){
		console.log('enter controller_189')
		$scope.test = TestService.getTest()
	})

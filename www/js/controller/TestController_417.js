angular.module('TestController_417', ['TestService'])
	.controller('Controller_417', function($scope, $state, TestService){
		console.log('enter controller_417')
		$scope.test = TestService.getTest()
	})

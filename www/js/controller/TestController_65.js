angular.module('TestController_65', ['TestService'])
	.controller('Controller_65', function($scope, $state, TestService){
		console.log('enter controller_65')
		$scope.test = TestService.getTest()
	})

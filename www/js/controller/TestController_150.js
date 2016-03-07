angular.module('TestController_150', ['TestService'])
	.controller('Controller_150', function($scope, $state, TestService){
		console.log('enter controller_150')
		$scope.test = TestService.getTest()
	})

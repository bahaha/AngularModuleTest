angular.module('TestController_216', ['TestService'])
	.controller('Controller_216', function($scope, $state, TestService){
		console.log('enter controller_216')
		$scope.test = TestService.getTest()
	})

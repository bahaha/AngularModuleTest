angular.module('TestController_93', ['TestService'])
	.controller('Controller_93', function($scope, $state, TestService){
		console.log('enter controller_93')
		$scope.test = TestService.getTest()
	})

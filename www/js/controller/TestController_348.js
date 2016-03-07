angular.module('TestController_348', ['TestService'])
	.controller('Controller_348', function($scope, $state, TestService){
		console.log('enter controller_348')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_382', ['TestService'])
	.controller('Controller_382', function($scope, $state, TestService){
		console.log('enter controller_382')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_52', ['TestService'])
	.controller('Controller_52', function($scope, $state, TestService){
		console.log('enter controller_52')
		$scope.test = TestService.getTest()
	})

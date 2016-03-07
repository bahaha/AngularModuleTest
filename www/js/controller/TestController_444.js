angular.module('TestController_444', ['TestService'])
	.controller('Controller_444', function($scope, $state, TestService){
		console.log('enter controller_444')
		$scope.test = TestService.getTest()
	})

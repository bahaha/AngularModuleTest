angular.module('TestController_634', ['TestService'])
	.controller('Controller_634', function($scope, $state, TestService){
		console.log('enter controller_634')
		$scope.test = TestService.getTest()
	})

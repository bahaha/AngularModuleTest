angular.module('TestController_59', ['TestService'])
	.controller('Controller_59', function($scope, $state, TestService){
		console.log('enter controller_59')
		$scope.test = TestService.getTest()
	})

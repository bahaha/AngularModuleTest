angular.module('TestController_448', ['TestService'])
	.controller('Controller_448', function($scope, $state, TestService){
		console.log('enter controller_448')
		$scope.test = TestService.getTest()
	})

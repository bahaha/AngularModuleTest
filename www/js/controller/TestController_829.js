angular.module('TestController_829', ['TestService'])
	.controller('Controller_829', function($scope, $state, TestService){
		console.log('enter controller_829')
		$scope.test = TestService.getTest()
	})

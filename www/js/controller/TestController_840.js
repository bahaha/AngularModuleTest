angular.module('TestController_840', ['TestService'])
	.controller('Controller_840', function($scope, $state, TestService){
		console.log('enter controller_840')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_127', ['TestService'])
	.controller('Controller_127', function($scope, $state, TestService){
		console.log('enter controller_127')
		$scope.test = TestService.getTest()
	})

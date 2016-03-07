angular.module('TestController_311', ['TestService'])
	.controller('Controller_311', function($scope, $state, TestService){
		console.log('enter controller_311')
		$scope.test = TestService.getTest()
	})

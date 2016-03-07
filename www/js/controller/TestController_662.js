angular.module('TestController_662', ['TestService'])
	.controller('Controller_662', function($scope, $state, TestService){
		console.log('enter controller_662')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_418', ['TestService'])
	.controller('Controller_418', function($scope, $state, TestService){
		console.log('enter controller_418')
		$scope.test = TestService.getTest()
	})

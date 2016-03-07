angular.module('TestController_22', ['TestService'])
	.controller('Controller_22', function($scope, $state, TestService){
		console.log('enter controller_22')
		$scope.test = TestService.getTest()
	})

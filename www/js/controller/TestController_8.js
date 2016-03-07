angular.module('TestController_8', ['TestService'])
	.controller('Controller_8', function($scope, $state, TestService){
		console.log('enter controller_8')
		$scope.test = TestService.getTest()
	})

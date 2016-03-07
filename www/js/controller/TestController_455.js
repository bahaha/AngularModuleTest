angular.module('TestController_455', ['TestService'])
	.controller('Controller_455', function($scope, $state, TestService){
		console.log('enter controller_455')
		$scope.test = TestService.getTest()
	})

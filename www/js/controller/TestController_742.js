angular.module('TestController_742', ['TestService'])
	.controller('Controller_742', function($scope, $state, TestService){
		console.log('enter controller_742')
		$scope.test = TestService.getTest()
	})

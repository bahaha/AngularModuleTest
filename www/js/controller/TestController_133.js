angular.module('TestController_133', ['TestService'])
	.controller('Controller_133', function($scope, $state, TestService){
		console.log('enter controller_133')
		$scope.test = TestService.getTest()
	})

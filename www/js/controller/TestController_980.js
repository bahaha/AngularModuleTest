angular.module('TestController_980', ['TestService'])
	.controller('Controller_980', function($scope, $state, TestService){
		console.log('enter controller_980')
		$scope.test = TestService.getTest()
	})

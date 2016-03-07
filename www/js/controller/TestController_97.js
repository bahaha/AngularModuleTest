angular.module('TestController_97', ['TestService'])
	.controller('Controller_97', function($scope, $state, TestService){
		console.log('enter controller_97')
		$scope.test = TestService.getTest()
	})

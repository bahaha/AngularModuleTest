angular.module('TestController_866', ['TestService'])
	.controller('Controller_866', function($scope, $state, TestService){
		console.log('enter controller_866')
		$scope.test = TestService.getTest()
	})

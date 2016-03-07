angular.module('TestController_881', ['TestService'])
	.controller('Controller_881', function($scope, $state, TestService){
		console.log('enter controller_881')
		$scope.test = TestService.getTest()
	})

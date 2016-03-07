angular.module('TestController_861', ['TestService'])
	.controller('Controller_861', function($scope, $state, TestService){
		console.log('enter controller_861')
		$scope.test = TestService.getTest()
	})

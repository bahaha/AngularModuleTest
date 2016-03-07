angular.module('TestController_770', ['TestService'])
	.controller('Controller_770', function($scope, $state, TestService){
		console.log('enter controller_770')
		$scope.test = TestService.getTest()
	})

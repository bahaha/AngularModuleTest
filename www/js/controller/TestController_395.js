angular.module('TestController_395', ['TestService'])
	.controller('Controller_395', function($scope, $state, TestService){
		console.log('enter controller_395')
		$scope.test = TestService.getTest()
	})

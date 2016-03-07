angular.module('TestController_929', ['TestService'])
	.controller('Controller_929', function($scope, $state, TestService){
		console.log('enter controller_929')
		$scope.test = TestService.getTest()
	})

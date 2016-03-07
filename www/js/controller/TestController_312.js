angular.module('TestController_312', ['TestService'])
	.controller('Controller_312', function($scope, $state, TestService){
		console.log('enter controller_312')
		$scope.test = TestService.getTest()
	})

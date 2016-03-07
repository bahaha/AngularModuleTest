angular.module('TestController_689', ['TestService'])
	.controller('Controller_689', function($scope, $state, TestService){
		console.log('enter controller_689')
		$scope.test = TestService.getTest()
	})

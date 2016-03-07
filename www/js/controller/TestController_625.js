angular.module('TestController_625', ['TestService'])
	.controller('Controller_625', function($scope, $state, TestService){
		console.log('enter controller_625')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_923', ['TestService'])
	.controller('Controller_923', function($scope, $state, TestService){
		console.log('enter controller_923')
		$scope.test = TestService.getTest()
	})

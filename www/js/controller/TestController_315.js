angular.module('TestController_315', ['TestService'])
	.controller('Controller_315', function($scope, $state, TestService){
		console.log('enter controller_315')
		$scope.test = TestService.getTest()
	})

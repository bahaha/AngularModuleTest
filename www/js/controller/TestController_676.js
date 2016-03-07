angular.module('TestController_676', ['TestService'])
	.controller('Controller_676', function($scope, $state, TestService){
		console.log('enter controller_676')
		$scope.test = TestService.getTest()
	})

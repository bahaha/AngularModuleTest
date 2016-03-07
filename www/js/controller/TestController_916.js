angular.module('TestController_916', ['TestService'])
	.controller('Controller_916', function($scope, $state, TestService){
		console.log('enter controller_916')
		$scope.test = TestService.getTest()
	})

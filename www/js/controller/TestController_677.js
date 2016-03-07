angular.module('TestController_677', ['TestService'])
	.controller('Controller_677', function($scope, $state, TestService){
		console.log('enter controller_677')
		$scope.test = TestService.getTest()
	})

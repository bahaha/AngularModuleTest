angular.module('TestController_934', ['TestService'])
	.controller('Controller_934', function($scope, $state, TestService){
		console.log('enter controller_934')
		$scope.test = TestService.getTest()
	})

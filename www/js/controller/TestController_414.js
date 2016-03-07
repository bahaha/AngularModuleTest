angular.module('TestController_414', ['TestService'])
	.controller('Controller_414', function($scope, $state, TestService){
		console.log('enter controller_414')
		$scope.test = TestService.getTest()
	})

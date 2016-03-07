angular.module('TestController_367', ['TestService'])
	.controller('Controller_367', function($scope, $state, TestService){
		console.log('enter controller_367')
		$scope.test = TestService.getTest()
	})

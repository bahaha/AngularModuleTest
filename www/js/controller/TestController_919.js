angular.module('TestController_919', ['TestService'])
	.controller('Controller_919', function($scope, $state, TestService){
		console.log('enter controller_919')
		$scope.test = TestService.getTest()
	})

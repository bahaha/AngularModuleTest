angular.module('TestController_820', ['TestService'])
	.controller('Controller_820', function($scope, $state, TestService){
		console.log('enter controller_820')
		$scope.test = TestService.getTest()
	})

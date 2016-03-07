angular.module('TestController_909', ['TestService'])
	.controller('Controller_909', function($scope, $state, TestService){
		console.log('enter controller_909')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_688', ['TestService'])
	.controller('Controller_688', function($scope, $state, TestService){
		console.log('enter controller_688')
		$scope.test = TestService.getTest()
	})

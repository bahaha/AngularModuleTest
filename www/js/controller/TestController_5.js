angular.module('TestController_5', ['TestService'])
	.controller('Controller_5', function($scope, $state, TestService){
		console.log('enter controller_5')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_27', ['TestService'])
	.controller('Controller_27', function($scope, $state, TestService){
		console.log('enter controller_27')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_816', ['TestService'])
	.controller('Controller_816', function($scope, $state, TestService){
		console.log('enter controller_816')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_893', ['TestService'])
	.controller('Controller_893', function($scope, $state, TestService){
		console.log('enter controller_893')
		$scope.test = TestService.getTest()
	})

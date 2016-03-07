angular.module('TestController_233', ['TestService'])
	.controller('Controller_233', function($scope, $state, TestService){
		console.log('enter controller_233')
		$scope.test = TestService.getTest()
	})

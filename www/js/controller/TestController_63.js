angular.module('TestController_63', ['TestService'])
	.controller('Controller_63', function($scope, $state, TestService){
		console.log('enter controller_63')
		$scope.test = TestService.getTest()
	})

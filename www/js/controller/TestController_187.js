angular.module('TestController_187', ['TestService'])
	.controller('Controller_187', function($scope, $state, TestService){
		console.log('enter controller_187')
		$scope.test = TestService.getTest()
	})

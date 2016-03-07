angular.module('TestController_205', ['TestService'])
	.controller('Controller_205', function($scope, $state, TestService){
		console.log('enter controller_205')
		$scope.test = TestService.getTest()
	})

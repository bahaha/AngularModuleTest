angular.module('TestController_190', ['TestService'])
	.controller('Controller_190', function($scope, $state, TestService){
		console.log('enter controller_190')
		$scope.test = TestService.getTest()
	})

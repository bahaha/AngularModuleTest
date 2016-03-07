angular.module('TestController_324', ['TestService'])
	.controller('Controller_324', function($scope, $state, TestService){
		console.log('enter controller_324')
		$scope.test = TestService.getTest()
	})

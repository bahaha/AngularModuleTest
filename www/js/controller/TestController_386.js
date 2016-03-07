angular.module('TestController_386', ['TestService'])
	.controller('Controller_386', function($scope, $state, TestService){
		console.log('enter controller_386')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_672', ['TestService'])
	.controller('Controller_672', function($scope, $state, TestService){
		console.log('enter controller_672')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_940', ['TestService'])
	.controller('Controller_940', function($scope, $state, TestService){
		console.log('enter controller_940')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_611', ['TestService'])
	.controller('Controller_611', function($scope, $state, TestService){
		console.log('enter controller_611')
		$scope.test = TestService.getTest()
	})

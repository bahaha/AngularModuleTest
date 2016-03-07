angular.module('TestController_746', ['TestService'])
	.controller('Controller_746', function($scope, $state, TestService){
		console.log('enter controller_746')
		$scope.test = TestService.getTest()
	})

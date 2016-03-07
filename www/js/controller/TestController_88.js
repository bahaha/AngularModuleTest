angular.module('TestController_88', ['TestService'])
	.controller('Controller_88', function($scope, $state, TestService){
		console.log('enter controller_88')
		$scope.test = TestService.getTest()
	})

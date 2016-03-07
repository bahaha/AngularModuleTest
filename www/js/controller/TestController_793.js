angular.module('TestController_793', ['TestService'])
	.controller('Controller_793', function($scope, $state, TestService){
		console.log('enter controller_793')
		$scope.test = TestService.getTest()
	})

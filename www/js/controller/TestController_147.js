angular.module('TestController_147', ['TestService'])
	.controller('Controller_147', function($scope, $state, TestService){
		console.log('enter controller_147')
		$scope.test = TestService.getTest()
	})

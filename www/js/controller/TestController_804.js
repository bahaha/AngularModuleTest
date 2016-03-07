angular.module('TestController_804', ['TestService'])
	.controller('Controller_804', function($scope, $state, TestService){
		console.log('enter controller_804')
		$scope.test = TestService.getTest()
	})

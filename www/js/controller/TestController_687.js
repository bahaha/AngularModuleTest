angular.module('TestController_687', ['TestService'])
	.controller('Controller_687', function($scope, $state, TestService){
		console.log('enter controller_687')
		$scope.test = TestService.getTest()
	})

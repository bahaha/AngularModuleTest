angular.module('TestController_745', ['TestService'])
	.controller('Controller_745', function($scope, $state, TestService){
		console.log('enter controller_745')
		$scope.test = TestService.getTest()
	})

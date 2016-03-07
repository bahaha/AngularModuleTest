angular.module('TestController_228', ['TestService'])
	.controller('Controller_228', function($scope, $state, TestService){
		console.log('enter controller_228')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_765', ['TestService'])
	.controller('Controller_765', function($scope, $state, TestService){
		console.log('enter controller_765')
		$scope.test = TestService.getTest()
	})

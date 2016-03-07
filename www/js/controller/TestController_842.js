angular.module('TestController_842', ['TestService'])
	.controller('Controller_842', function($scope, $state, TestService){
		console.log('enter controller_842')
		$scope.test = TestService.getTest()
	})

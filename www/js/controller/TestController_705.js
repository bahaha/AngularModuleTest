angular.module('TestController_705', ['TestService'])
	.controller('Controller_705', function($scope, $state, TestService){
		console.log('enter controller_705')
		$scope.test = TestService.getTest()
	})

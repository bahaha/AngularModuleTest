angular.module('TestController_898', ['TestService'])
	.controller('Controller_898', function($scope, $state, TestService){
		console.log('enter controller_898')
		$scope.test = TestService.getTest()
	})

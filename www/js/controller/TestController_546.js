angular.module('TestController_546', ['TestService'])
	.controller('Controller_546', function($scope, $state, TestService){
		console.log('enter controller_546')
		$scope.test = TestService.getTest()
	})

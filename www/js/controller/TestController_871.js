angular.module('TestController_871', ['TestService'])
	.controller('Controller_871', function($scope, $state, TestService){
		console.log('enter controller_871')
		$scope.test = TestService.getTest()
	})

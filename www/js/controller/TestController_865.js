angular.module('TestController_865', ['TestService'])
	.controller('Controller_865', function($scope, $state, TestService){
		console.log('enter controller_865')
		$scope.test = TestService.getTest()
	})

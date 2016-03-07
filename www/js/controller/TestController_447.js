angular.module('TestController_447', ['TestService'])
	.controller('Controller_447', function($scope, $state, TestService){
		console.log('enter controller_447')
		$scope.test = TestService.getTest()
	})

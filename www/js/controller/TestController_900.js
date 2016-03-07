angular.module('TestController_900', ['TestService'])
	.controller('Controller_900', function($scope, $state, TestService){
		console.log('enter controller_900')
		$scope.test = TestService.getTest()
	})

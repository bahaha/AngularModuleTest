angular.module('TestController_49', ['TestService'])
	.controller('Controller_49', function($scope, $state, TestService){
		console.log('enter controller_49')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_930', ['TestService'])
	.controller('Controller_930', function($scope, $state, TestService){
		console.log('enter controller_930')
		$scope.test = TestService.getTest()
	})

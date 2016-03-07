angular.module('TestController_755', ['TestService'])
	.controller('Controller_755', function($scope, $state, TestService){
		console.log('enter controller_755')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_548', ['TestService'])
	.controller('Controller_548', function($scope, $state, TestService){
		console.log('enter controller_548')
		$scope.test = TestService.getTest()
	})

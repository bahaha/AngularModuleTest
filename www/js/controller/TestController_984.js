angular.module('TestController_984', ['TestService'])
	.controller('Controller_984', function($scope, $state, TestService){
		console.log('enter controller_984')
		$scope.test = TestService.getTest()
	})

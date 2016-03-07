angular.module('TestController_67', ['TestService'])
	.controller('Controller_67', function($scope, $state, TestService){
		console.log('enter controller_67')
		$scope.test = TestService.getTest()
	})

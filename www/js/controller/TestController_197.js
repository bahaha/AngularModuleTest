angular.module('TestController_197', ['TestService'])
	.controller('Controller_197', function($scope, $state, TestService){
		console.log('enter controller_197')
		$scope.test = TestService.getTest()
	})

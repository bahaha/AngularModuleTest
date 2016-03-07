angular.module('TestController_325', ['TestService'])
	.controller('Controller_325', function($scope, $state, TestService){
		console.log('enter controller_325')
		$scope.test = TestService.getTest()
	})

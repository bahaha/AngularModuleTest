angular.module('TestController_371', ['TestService'])
	.controller('Controller_371', function($scope, $state, TestService){
		console.log('enter controller_371')
		$scope.test = TestService.getTest()
	})

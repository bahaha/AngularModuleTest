angular.module('TestController_440', ['TestService'])
	.controller('Controller_440', function($scope, $state, TestService){
		console.log('enter controller_440')
		$scope.test = TestService.getTest()
	})

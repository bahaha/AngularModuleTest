angular.module('TestController_690', ['TestService'])
	.controller('Controller_690', function($scope, $state, TestService){
		console.log('enter controller_690')
		$scope.test = TestService.getTest()
	})

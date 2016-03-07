angular.module('TestController_642', ['TestService'])
	.controller('Controller_642', function($scope, $state, TestService){
		console.log('enter controller_642')
		$scope.test = TestService.getTest()
	})

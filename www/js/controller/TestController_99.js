angular.module('TestController_99', ['TestService'])
	.controller('Controller_99', function($scope, $state, TestService){
		console.log('enter controller_99')
		$scope.test = TestService.getTest()
	})

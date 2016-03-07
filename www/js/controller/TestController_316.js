angular.module('TestController_316', ['TestService'])
	.controller('Controller_316', function($scope, $state, TestService){
		console.log('enter controller_316')
		$scope.test = TestService.getTest()
	})

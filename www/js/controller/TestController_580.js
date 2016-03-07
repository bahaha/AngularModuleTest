angular.module('TestController_580', ['TestService'])
	.controller('Controller_580', function($scope, $state, TestService){
		console.log('enter controller_580')
		$scope.test = TestService.getTest()
	})

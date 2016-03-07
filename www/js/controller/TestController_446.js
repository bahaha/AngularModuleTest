angular.module('TestController_446', ['TestService'])
	.controller('Controller_446', function($scope, $state, TestService){
		console.log('enter controller_446')
		$scope.test = TestService.getTest()
	})

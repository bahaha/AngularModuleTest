angular.module('TestController_221', ['TestService'])
	.controller('Controller_221', function($scope, $state, TestService){
		console.log('enter controller_221')
		$scope.test = TestService.getTest()
	})

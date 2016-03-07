angular.module('TestController_224', ['TestService'])
	.controller('Controller_224', function($scope, $state, TestService){
		console.log('enter controller_224')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_985', ['TestService'])
	.controller('Controller_985', function($scope, $state, TestService){
		console.log('enter controller_985')
		$scope.test = TestService.getTest()
	})

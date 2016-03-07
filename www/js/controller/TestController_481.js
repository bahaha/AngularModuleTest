angular.module('TestController_481', ['TestService'])
	.controller('Controller_481', function($scope, $state, TestService){
		console.log('enter controller_481')
		$scope.test = TestService.getTest()
	})

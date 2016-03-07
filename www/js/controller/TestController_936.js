angular.module('TestController_936', ['TestService'])
	.controller('Controller_936', function($scope, $state, TestService){
		console.log('enter controller_936')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_346', ['TestService'])
	.controller('Controller_346', function($scope, $state, TestService){
		console.log('enter controller_346')
		$scope.test = TestService.getTest()
	})

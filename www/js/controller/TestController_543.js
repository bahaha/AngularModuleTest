angular.module('TestController_543', ['TestService'])
	.controller('Controller_543', function($scope, $state, TestService){
		console.log('enter controller_543')
		$scope.test = TestService.getTest()
	})

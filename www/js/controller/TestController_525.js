angular.module('TestController_525', ['TestService'])
	.controller('Controller_525', function($scope, $state, TestService){
		console.log('enter controller_525')
		$scope.test = TestService.getTest()
	})

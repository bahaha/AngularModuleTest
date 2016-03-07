angular.module('TestController_911', ['TestService'])
	.controller('Controller_911', function($scope, $state, TestService){
		console.log('enter controller_911')
		$scope.test = TestService.getTest()
	})

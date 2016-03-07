angular.module('TestController_964', ['TestService'])
	.controller('Controller_964', function($scope, $state, TestService){
		console.log('enter controller_964')
		$scope.test = TestService.getTest()
	})

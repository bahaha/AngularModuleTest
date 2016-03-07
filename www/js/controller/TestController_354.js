angular.module('TestController_354', ['TestService'])
	.controller('Controller_354', function($scope, $state, TestService){
		console.log('enter controller_354')
		$scope.test = TestService.getTest()
	})

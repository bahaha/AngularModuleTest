angular.module('TestController_838', ['TestService'])
	.controller('Controller_838', function($scope, $state, TestService){
		console.log('enter controller_838')
		$scope.test = TestService.getTest()
	})

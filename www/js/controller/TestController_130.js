angular.module('TestController_130', ['TestService'])
	.controller('Controller_130', function($scope, $state, TestService){
		console.log('enter controller_130')
		$scope.test = TestService.getTest()
	})

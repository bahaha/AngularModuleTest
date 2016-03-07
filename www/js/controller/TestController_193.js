angular.module('TestController_193', ['TestService'])
	.controller('Controller_193', function($scope, $state, TestService){
		console.log('enter controller_193')
		$scope.test = TestService.getTest()
	})

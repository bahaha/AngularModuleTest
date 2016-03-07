angular.module('TestController_774', ['TestService'])
	.controller('Controller_774', function($scope, $state, TestService){
		console.log('enter controller_774')
		$scope.test = TestService.getTest()
	})

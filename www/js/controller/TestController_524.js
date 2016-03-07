angular.module('TestController_524', ['TestService'])
	.controller('Controller_524', function($scope, $state, TestService){
		console.log('enter controller_524')
		$scope.test = TestService.getTest()
	})

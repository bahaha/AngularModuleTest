angular.module('TestController_582', ['TestService'])
	.controller('Controller_582', function($scope, $state, TestService){
		console.log('enter controller_582')
		$scope.test = TestService.getTest()
	})

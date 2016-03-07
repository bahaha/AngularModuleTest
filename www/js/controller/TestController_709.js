angular.module('TestController_709', ['TestService'])
	.controller('Controller_709', function($scope, $state, TestService){
		console.log('enter controller_709')
		$scope.test = TestService.getTest()
	})

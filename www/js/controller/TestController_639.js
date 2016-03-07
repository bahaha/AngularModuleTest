angular.module('TestController_639', ['TestService'])
	.controller('Controller_639', function($scope, $state, TestService){
		console.log('enter controller_639')
		$scope.test = TestService.getTest()
	})

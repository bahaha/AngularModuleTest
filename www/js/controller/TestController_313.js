angular.module('TestController_313', ['TestService'])
	.controller('Controller_313', function($scope, $state, TestService){
		console.log('enter controller_313')
		$scope.test = TestService.getTest()
	})

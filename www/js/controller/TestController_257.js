angular.module('TestController_257', ['TestService'])
	.controller('Controller_257', function($scope, $state, TestService){
		console.log('enter controller_257')
		$scope.test = TestService.getTest()
	})

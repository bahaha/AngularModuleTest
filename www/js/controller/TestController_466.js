angular.module('TestController_466', ['TestService'])
	.controller('Controller_466', function($scope, $state, TestService){
		console.log('enter controller_466')
		$scope.test = TestService.getTest()
	})

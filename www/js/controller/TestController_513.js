angular.module('TestController_513', ['TestService'])
	.controller('Controller_513', function($scope, $state, TestService){
		console.log('enter controller_513')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_480', ['TestService'])
	.controller('Controller_480', function($scope, $state, TestService){
		console.log('enter controller_480')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_784', ['TestService'])
	.controller('Controller_784', function($scope, $state, TestService){
		console.log('enter controller_784')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_509', ['TestService'])
	.controller('Controller_509', function($scope, $state, TestService){
		console.log('enter controller_509')
		$scope.test = TestService.getTest()
	})

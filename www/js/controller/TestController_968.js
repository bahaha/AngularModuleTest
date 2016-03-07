angular.module('TestController_968', ['TestService'])
	.controller('Controller_968', function($scope, $state, TestService){
		console.log('enter controller_968')
		$scope.test = TestService.getTest()
	})

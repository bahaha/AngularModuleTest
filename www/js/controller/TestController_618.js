angular.module('TestController_618', ['TestService'])
	.controller('Controller_618', function($scope, $state, TestService){
		console.log('enter controller_618')
		$scope.test = TestService.getTest()
	})

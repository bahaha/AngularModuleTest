angular.module('TestController_259', ['TestService'])
	.controller('Controller_259', function($scope, $state, TestService){
		console.log('enter controller_259')
		$scope.test = TestService.getTest()
	})

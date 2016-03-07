angular.module('TestController_244', ['TestService'])
	.controller('Controller_244', function($scope, $state, TestService){
		console.log('enter controller_244')
		$scope.test = TestService.getTest()
	})

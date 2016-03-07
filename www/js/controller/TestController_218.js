angular.module('TestController_218', ['TestService'])
	.controller('Controller_218', function($scope, $state, TestService){
		console.log('enter controller_218')
		$scope.test = TestService.getTest()
	})

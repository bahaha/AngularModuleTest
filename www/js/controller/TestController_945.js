angular.module('TestController_945', ['TestService'])
	.controller('Controller_945', function($scope, $state, TestService){
		console.log('enter controller_945')
		$scope.test = TestService.getTest()
	})

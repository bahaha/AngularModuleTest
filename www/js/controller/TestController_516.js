angular.module('TestController_516', ['TestService'])
	.controller('Controller_516', function($scope, $state, TestService){
		console.log('enter controller_516')
		$scope.test = TestService.getTest()
	})

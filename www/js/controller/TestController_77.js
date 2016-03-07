angular.module('TestController_77', ['TestService'])
	.controller('Controller_77', function($scope, $state, TestService){
		console.log('enter controller_77')
		$scope.test = TestService.getTest()
	})

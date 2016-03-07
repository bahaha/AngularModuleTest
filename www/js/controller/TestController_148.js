angular.module('TestController_148', ['TestService'])
	.controller('Controller_148', function($scope, $state, TestService){
		console.log('enter controller_148')
		$scope.test = TestService.getTest()
	})

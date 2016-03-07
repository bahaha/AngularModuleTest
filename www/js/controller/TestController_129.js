angular.module('TestController_129', ['TestService'])
	.controller('Controller_129', function($scope, $state, TestService){
		console.log('enter controller_129')
		$scope.test = TestService.getTest()
	})

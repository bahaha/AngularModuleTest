angular.module('TestController_895', ['TestService'])
	.controller('Controller_895', function($scope, $state, TestService){
		console.log('enter controller_895')
		$scope.test = TestService.getTest()
	})

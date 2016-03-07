angular.module('TestController_685', ['TestService'])
	.controller('Controller_685', function($scope, $state, TestService){
		console.log('enter controller_685')
		$scope.test = TestService.getTest()
	})

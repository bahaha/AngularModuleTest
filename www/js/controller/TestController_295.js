angular.module('TestController_295', ['TestService'])
	.controller('Controller_295', function($scope, $state, TestService){
		console.log('enter controller_295')
		$scope.test = TestService.getTest()
	})

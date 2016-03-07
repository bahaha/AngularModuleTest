angular.module('TestController_970', ['TestService'])
	.controller('Controller_970', function($scope, $state, TestService){
		console.log('enter controller_970')
		$scope.test = TestService.getTest()
	})

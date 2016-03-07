angular.module('TestController_304', ['TestService'])
	.controller('Controller_304', function($scope, $state, TestService){
		console.log('enter controller_304')
		$scope.test = TestService.getTest()
	})

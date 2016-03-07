angular.module('TestController_732', ['TestService'])
	.controller('Controller_732', function($scope, $state, TestService){
		console.log('enter controller_732')
		$scope.test = TestService.getTest()
	})

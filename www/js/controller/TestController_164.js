angular.module('TestController_164', ['TestService'])
	.controller('Controller_164', function($scope, $state, TestService){
		console.log('enter controller_164')
		$scope.test = TestService.getTest()
	})

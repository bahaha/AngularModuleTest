angular.module('TestController_149', ['TestService'])
	.controller('Controller_149', function($scope, $state, TestService){
		console.log('enter controller_149')
		$scope.test = TestService.getTest()
	})

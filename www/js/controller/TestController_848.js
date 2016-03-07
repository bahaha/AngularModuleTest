angular.module('TestController_848', ['TestService'])
	.controller('Controller_848', function($scope, $state, TestService){
		console.log('enter controller_848')
		$scope.test = TestService.getTest()
	})

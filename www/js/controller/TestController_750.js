angular.module('TestController_750', ['TestService'])
	.controller('Controller_750', function($scope, $state, TestService){
		console.log('enter controller_750')
		$scope.test = TestService.getTest()
	})

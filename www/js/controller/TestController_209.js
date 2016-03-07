angular.module('TestController_209', ['TestService'])
	.controller('Controller_209', function($scope, $state, TestService){
		console.log('enter controller_209')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_785', ['TestService'])
	.controller('Controller_785', function($scope, $state, TestService){
		console.log('enter controller_785')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_636', ['TestService'])
	.controller('Controller_636', function($scope, $state, TestService){
		console.log('enter controller_636')
		$scope.test = TestService.getTest()
	})

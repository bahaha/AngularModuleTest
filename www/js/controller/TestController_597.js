angular.module('TestController_597', ['TestService'])
	.controller('Controller_597', function($scope, $state, TestService){
		console.log('enter controller_597')
		$scope.test = TestService.getTest()
	})

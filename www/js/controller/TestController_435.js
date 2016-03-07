angular.module('TestController_435', ['TestService'])
	.controller('Controller_435', function($scope, $state, TestService){
		console.log('enter controller_435')
		$scope.test = TestService.getTest()
	})

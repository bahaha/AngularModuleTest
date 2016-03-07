angular.module('TestController_66', ['TestService'])
	.controller('Controller_66', function($scope, $state, TestService){
		console.log('enter controller_66')
		$scope.test = TestService.getTest()
	})

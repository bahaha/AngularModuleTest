angular.module('TestController_347', ['TestService'])
	.controller('Controller_347', function($scope, $state, TestService){
		console.log('enter controller_347')
		$scope.test = TestService.getTest()
	})

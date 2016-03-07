angular.module('TestController_352', ['TestService'])
	.controller('Controller_352', function($scope, $state, TestService){
		console.log('enter controller_352')
		$scope.test = TestService.getTest()
	})

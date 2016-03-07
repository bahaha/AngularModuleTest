angular.module('TestController_517', ['TestService'])
	.controller('Controller_517', function($scope, $state, TestService){
		console.log('enter controller_517')
		$scope.test = TestService.getTest()
	})

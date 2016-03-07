angular.module('TestController_266', ['TestService'])
	.controller('Controller_266', function($scope, $state, TestService){
		console.log('enter controller_266')
		$scope.test = TestService.getTest()
	})

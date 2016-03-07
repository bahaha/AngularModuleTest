angular.module('TestController_174', ['TestService'])
	.controller('Controller_174', function($scope, $state, TestService){
		console.log('enter controller_174')
		$scope.test = TestService.getTest()
	})

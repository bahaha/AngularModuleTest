angular.module('TestController_884', ['TestService'])
	.controller('Controller_884', function($scope, $state, TestService){
		console.log('enter controller_884')
		$scope.test = TestService.getTest()
	})

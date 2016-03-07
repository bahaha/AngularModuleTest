angular.module('TestController_474', ['TestService'])
	.controller('Controller_474', function($scope, $state, TestService){
		console.log('enter controller_474')
		$scope.test = TestService.getTest()
	})

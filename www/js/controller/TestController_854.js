angular.module('TestController_854', ['TestService'])
	.controller('Controller_854', function($scope, $state, TestService){
		console.log('enter controller_854')
		$scope.test = TestService.getTest()
	})

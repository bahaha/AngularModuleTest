angular.module('TestController_772', ['TestService'])
	.controller('Controller_772', function($scope, $state, TestService){
		console.log('enter controller_772')
		$scope.test = TestService.getTest()
	})

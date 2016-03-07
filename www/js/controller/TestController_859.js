angular.module('TestController_859', ['TestService'])
	.controller('Controller_859', function($scope, $state, TestService){
		console.log('enter controller_859')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_323', ['TestService'])
	.controller('Controller_323', function($scope, $state, TestService){
		console.log('enter controller_323')
		$scope.test = TestService.getTest()
	})

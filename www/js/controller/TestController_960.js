angular.module('TestController_960', ['TestService'])
	.controller('Controller_960', function($scope, $state, TestService){
		console.log('enter controller_960')
		$scope.test = TestService.getTest()
	})

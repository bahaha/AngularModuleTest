angular.module('TestController_863', ['TestService'])
	.controller('Controller_863', function($scope, $state, TestService){
		console.log('enter controller_863')
		$scope.test = TestService.getTest()
	})

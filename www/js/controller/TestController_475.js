angular.module('TestController_475', ['TestService'])
	.controller('Controller_475', function($scope, $state, TestService){
		console.log('enter controller_475')
		$scope.test = TestService.getTest()
	})

angular.module('TestController_296', ['TestService'])
	.controller('Controller_296', function($scope, $state, TestService){
		console.log('enter controller_296')
		$scope.test = TestService.getTest()
	})

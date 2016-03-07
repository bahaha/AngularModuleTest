module.exports= function($scope, $state, TestService){
		console.log('enter controller_609')
		$scope.test = TestService.getTest()
	}

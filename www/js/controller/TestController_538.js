module.exports= function($scope, $state, TestService){
		console.log('enter controller_538')
		$scope.test = TestService.getTest()
	}

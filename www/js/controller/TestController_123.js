module.exports= function($scope, $state, TestService){
		console.log('enter controller_123')
		$scope.test = TestService.getTest()
	}

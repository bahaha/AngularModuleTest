module.exports= function($scope, $state, TestService){
		console.log('enter controller_485')
		$scope.test = TestService.getTest()
	}

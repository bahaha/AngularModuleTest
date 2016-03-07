module.exports= function($scope, $state, TestService){
		console.log('enter controller_765')
		$scope.test = TestService.getTest()
	}

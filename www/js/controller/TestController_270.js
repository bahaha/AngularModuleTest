module.exports= function($scope, $state, TestService){
		console.log('enter controller_270')
		$scope.test = TestService.getTest()
	}

module.exports= function($scope, $state, TestService){
		console.log('enter controller_283')
		$scope.test = TestService.getTest()
	}

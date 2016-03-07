module.exports= function($scope, $state, TestService){
		console.log('enter controller_493')
		$scope.test = TestService.getTest()
	}
